export const _test_message =
    (name: string, expected: string, solution: string) => () => {
        if (expected !== solution)
            throw new Error(
                `Bug on TSON.message(): failed to understand the ${name} type.`,
            );
    };
