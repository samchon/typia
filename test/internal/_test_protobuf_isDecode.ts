import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_protobuf_isDecode =
    (name: string) =>
    <T extends object>(factory: TestStructure<T>) =>
    (functor: {
        decode: (input: Uint8Array) => typia.Primitive<T> | null;
        encode: (input: T) => Uint8Array;
    }) =>
    () => {
        try {
            const data: T = factory.generate();
            const encoded: Uint8Array = functor.encode(data);
            const decoded: typia.Primitive<T> | null = functor.decode(encoded);

            if (
                decoded === null ||
                primitive_equal_to(data, decoded as T) === false
            )
                throw new Error(
                    `Bug on typia.protobuf.isDecode(): failed to understand ${name} type.`,
                );
        } catch {
            throw new Error(
                `Bug on typia.protobuf.isDecode(): failed to decode ${name} type.`,
            );
        }
    };
