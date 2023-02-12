import { primitive_equal_to } from "../../internal/primitive_equal_to";

export function _test_clone<T>(
    name: string,
    generator: () => T,
    cloner: (input: T) => T,
): () => void {
    return () => {
        const data: T = generator();
        const cloned: T = cloner(data);
        const primitived: T = JSON.parse(JSON.stringify(data));

        if (primitive_equal_to(cloned, primitived) === false) {
            throw new Error(
                `Bug on typia.clone(): failed to clone the ${name} type.`,
            );
        }
    };
}
