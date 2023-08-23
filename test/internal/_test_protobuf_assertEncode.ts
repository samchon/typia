import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { _test_protobuf_encode } from "./_test_protobuf_encode";

export const _test_protobuf_assertEncode =
    (name: string) =>
    <T extends object>(factory: TestStructure<T>) =>
    (functor: {
        message: string;
        assertEncode: (input: T) => Uint8Array;
        decode: (input: Uint8Array) => typia.Resolved<T>;
    }) =>
    () => {
        _test_protobuf_encode(name)(factory)({
            message: functor.message,
            decode: functor.decode,
            encode: functor.assertEncode,
        });

        for (const spoil of factory.SPOILERS ?? []) {
            const elem: T = factory.generate();
            const expected: string[] = spoil(elem);

            try {
                functor.assertEncode(elem);
            } catch (exp) {
                if (exp instanceof typia.TypeGuardError)
                    if (exp.path && expected.includes(exp.path) === true)
                        continue;
                    else
                        console.log({
                            expected,
                            actual: exp.path,
                        });
            }
            throw new Error(
                `Bug on typia.json.assertEncode(): failed to detect error on the ${name} type.`,
            );
        }
    };
