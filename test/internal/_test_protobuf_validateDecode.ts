import typia from "typia";

import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_protobuf_validateDecode =
    (name: string) =>
    <T extends object>(factory: { generate(): T }) =>
    (functor: {
        decode: (input: Uint8Array) => typia.IValidation<typia.Primitive<T>>;
        encode: (input: T) => Uint8Array;
    }) =>
    () => {
        try {
            const data: T = factory.generate();
            const encoded: Uint8Array = functor.encode(data);
            const decoded: typia.IValidation<typia.Primitive<T>> | null =
                functor.decode(encoded);

            if (
                decoded.success === false ||
                primitive_equal_to(data, decoded.data as T) === false
            )
                throw new Error(
                    `Bug on typia.protobuf.validateDecode(): failed to understand ${name} type.`,
                );
        } catch {
            throw new Error(
                `Bug on typia.protobuf.validateDecode(): failed to decode ${name} type.`,
            );
        }
    };
