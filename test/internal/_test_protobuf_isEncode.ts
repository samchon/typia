import { TestStructure } from "../helpers/TestStructure";
import { _test_protobuf_encode } from "./_test_protobuf_encode";

export const _test_protobuf_isEncode =
    (name: string) =>
    <T extends object>(factory: TestStructure<T>) =>
    (functor: { message: string; isEncode: (input: T) => Uint8Array | null }) =>
    () => {
        _test_protobuf_encode(name)(factory)({
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
                    `Bug on typia.json.isEncode(): failed to detect error on the ${name} type.`,
                );
        }
    };
