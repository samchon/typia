import typia from "../../../../src";

const ERROR = {
    TOO_LONG_KEY_NAME1: {
        result: false,
        code: 4000,
        data: "Error happens something1.",
    },
    TOO_LONG_KEY_NAME2: {
        result: false,
        code: 4000,
        data: "Error happens something2.",
    },
    TOO_LONG_KEY_NAME3: {
        result: false,
        code: 4000,
        data: "Error happens something3.",
    },
    TOO_LONG_KEY_NAME4: {
        result: false,
        code: 4000,
        data: "Error happens something4.",
    },
    TOO_LONG_KEY_NAME5: {
        result: false,
        code: 4000,
        data: "Error happens something5.",
    },
} as const;

type KeyOfError = keyof typeof ERROR;
type ValueOfError = (typeof ERROR)[KeyOfError];
interface ResponseForm<T> {
    result: true;
    code: 1000;
    data: T;
}

type Try<T, E extends ValueOfError> = ResponseForm<T> | E;

const input: Try<
    true,
    | typeof ERROR.TOO_LONG_KEY_NAME1
    | typeof ERROR.TOO_LONG_KEY_NAME2
    | typeof ERROR.TOO_LONG_KEY_NAME3
    | typeof ERROR.TOO_LONG_KEY_NAME4
    | typeof ERROR.TOO_LONG_KEY_NAME5
> = {} as any;

typia.assert(input);
