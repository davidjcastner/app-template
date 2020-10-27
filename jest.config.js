module.exports = {
    globals: {
        'ts-jest': {
            diagnostics: false,
            tsconfig: '<rootDir>/tsconfig.json',
        },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    roots: ['<rootDir>/src', '<rootDir>/test'],
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
    },
};
