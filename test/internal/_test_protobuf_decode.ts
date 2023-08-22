import { TestStructure } from "../helpers/TestStructure";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_protobuf_decode =
    (name: string) =>
    <T extends object>(factory: TestStructure<T>) =>
    (functor: {
        decode: (input: Uint8Array) => T;
        encode: (input: T) => Uint8Array;
    }) =>
    () => {
        try {
            const data: T = factory.generate();
            const encoded: Uint8Array = functor.encode(data);
            const decoded: T = functor.decode(encoded);
            const again: Uint8Array = functor.encode(decoded);

            const equal: boolean =
                primitive_equal_to(data, decoded) &&
                encoded.length === again.length &&
                (() => {
                    for (let i: number = 0; i < encoded.length; i++)
                        if (encoded[i] !== again[i]) return false;
                    return true;
                })();
            if (equal === false)
                throw new Error(
                    `Bug on typia.protobuf.decode(): failed to understand ${name} type.`,
                );
        } catch {
            throw new Error(
                `Bug on typia.protobuf.decode(): failed to decode ${name} type.`,
            );
        }
    };
