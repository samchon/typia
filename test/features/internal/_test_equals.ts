export function _test_equals<T extends object>(
    name: string,
    generator: () => T,
    validator: (input: T) => boolean,
    repeat: number = 1,
): () => void {
    return () => {
        if (validator(generator()) === false)
            throw new Error(
                `Bug on TSON.equals(): failed to understand the ${name} type.`,
            );

        while (repeat-- > 0) {
            const elem: T = generator();
            spoil(elem);

            if (validator(elem) === true)
                throw new Error(
                    `Bug on TSON.equals(): failed to detect error on the ${name} type.`,
                );
        }
    };
}

function spoil(input: any): void {
    if (Array.isArray(input)) spoil_array(input);
    else if (typeof input === "object" && input !== null) spoil_object(input);
}

function spoil_object(obj: any): void {
    obj.__non_regular_type__ = "vulnerable";
    for (const value of Object.values(obj)) spoil(value);
}

function spoil_array(array: any): void {
    for (const child of array) spoil(child);
}
