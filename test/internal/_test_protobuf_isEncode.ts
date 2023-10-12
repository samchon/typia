import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { _test_protobuf_encode } from "./_test_protobuf_encode";

export const _test_protobuf_isEncode =
    (name: string) =>
    <T extends object>(factory: TestStructure<T>) =>
    (functor: {
        message: string;
        encode: (input: T) => Uint8Array | null;
        decode: (input: Uint8Array) => typia.Resolved<T>;
    }) =>
    () => {
        _test_protobuf_encode(name)(factory)({
            message: functor.message,
            decode: functor.decode,
            encode: (input) => {
                const binary: Uint8Array | null = functor.encode(input);
                if (binary === null)
                    throw new Error(
                        `Bug on typia.json.isEncode(): failed to understand the ${name} type.`,
                    );
                return binary;
            },
        })();
        for (const spoil of factory.SPOILERS ?? []) {
            const elem: T = factory.generate();
            spoil(elem);

            if (functor.encode(elem) !== null)
                throw new Error(
                    `Bug on typia.json.isEncode(): failed to detect error on the ${name} type.`,
                );
        }
    };
