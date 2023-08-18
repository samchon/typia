import { Spoiler } from "../helpers/Spoiler";
import { _test_protobuf_encode } from "./_test_protobuf_encode";

export const _test_protobuf_isEncode =
    <T extends object>(factory: {
        constructor: { name: string };
        generate(): T;
        SPOILERS?: Spoiler<T>[];
    }) =>
    (functor: { message: string; isEncode: (input: T) => Uint8Array | null }) =>
    () => {
        _test_protobuf_encode(factory)({
            message: functor.message,
            encode: (input) => {
                const binary: Uint8Array | null = functor.isEncode(input);
                if (binary === null) throw new Error();
                return binary;
            },
        });
        for (const spoil of factory.SPOILERS ?? []) {
            const elem: T = factory.generate();
            spoil(elem);

            if (functor.isEncode(elem) !== null)
                throw new Error(
                    `Bug on typia.json.isEncode(): failed to detect error on the ${factory.constructor.name} type.`,
                );
        }
    };
