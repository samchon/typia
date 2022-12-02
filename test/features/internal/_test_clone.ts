import { Primitive } from "../../../src";
import { primitive_equal_to } from "../../internal/primitive_equal_to";

export function _test_clone<T>(
    name: string,
    generator: () => T,
    cloner: (input: T) => Primitive<T>,
): () => void {
    return () => {
        const data: T = generator();
        const replica: Primitive<T> = JSON.parse(JSON.stringify(data));
        const cloned: Primitive<T> = cloner(data);

        if (primitive_equal_to(replica, cloned) === false) {
            console.log(replica, cloned);
            throw new Error(
                `Bug on TSON.clone(): failed to understand the ${name} type.`,
            );
        }
    };
}
