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

function spoil(elem: any): void {
    if (Array.isArray(elem)) spoil_array(elem);
    else if (typeof elem === "object" && elem !== null) spoil_object(elem);
}
function spoil_object(obj: any): void {
    obj.non_regular_type = "vulnerable";
    for (const value of Object.values(obj)) spoil(value);
}
function spoil_array(array: any): void {
    for (const child of array) spoil(child);
}
