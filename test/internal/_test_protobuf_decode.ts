import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_protobuf_decode =
    (name: string) =>
    <T extends object>(factory: TestStructure<T>) =>
    (functor: {
        decode: (input: Uint8Array) => typia.Primitive<T>;
        encode: (input: T) => Uint8Array;
    }) =>
    () => {
        try {
            const data: T = factory.generate();
            const encoded: Uint8Array = functor.encode(data);
            const decoded: typia.Primitive<T> = functor.decode(encoded);

            if (primitive_equal_to(data, decoded as T) === false)
                throw new Error(
                    `Bug on typia.protobuf.decode(): failed to understand ${name} type.`,
                );
        } catch {
            throw new Error(
                `Bug on typia.protobuf.decode(): failed to decode ${name} type.`,
            );
        }
    };
