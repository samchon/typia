import typia from "typia";

import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_protobuf_assertDecode =
    <T>(factory: { constructor: { name: string }; generate(): T }) =>
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
                    `Bug on typia.protobuf.assertDecode(): failed to understand ${factory.constructor.name} type.`,
                );
        } catch {
            throw new Error(
                `Bug on typia.protobuf.assertDecode(): failed to decode ${factory.constructor.name} type.`,
            );
        }
    };
