export function _test_equals<T extends object>(
    name: string,
    generator: () => T,
    validator: (input: T) => boolean,
    repeat: number = 1,
): () => void {
    return () => {
        if (validator(generator()) === false)
            throw new Error(
                `Bug on typia.equals(): failed to understand the ${name} type.`,
            );

        while (repeat-- > 0) {
            const elem: T = generator();
            if (spoil(elem) && validator(elem))
                throw new Error(
                    `Bug on typia.equals(): failed to detect error on the ${name} type.`,
                );
        }
    };
}

function spoil(input: any): boolean {
    if (Array.isArray(input)) return spoil_array(input);
    else if (
        typeof input === "object" &&
        input !== null &&
        typeof input.valueOf() === "object"
    )
        return spoil_object(input);
    return false;
}

function spoil_object(obj: any): boolean {
    obj.__non_regular_type__ = "vulnerable";
    for (const value of Object.values(obj)) spoil(value);
    return true;
}

function spoil_array(array: any): boolean {
    const res: boolean[] = array.map((child: any) => spoil(child));
    return res.some((b) => b);
}
