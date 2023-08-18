import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { _test_protobuf_encode } from "./_test_protobuf_encode";

export const _test_protobuf_assertEncode =
    <T extends object>(factory: {
        constructor: { name: string };
        generate(): T;
        SPOILERS?: Spoiler<T>[];
    }) =>
    (functor: { message: string; assertEncode: (input: T) => Uint8Array }) =>
    () => {
        _test_protobuf_encode(factory)({
            message: functor.message,
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
                `Bug on typia.json.assertEncode(): failed to detect error on the ${factory.constructor.name} type.`,
            );
        }
    };
