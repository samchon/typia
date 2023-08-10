import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_protobuf_assertEncode =
    <T>(factory: {
        constructor: { name: string };
        generate(): T;
        SPOILERS?: Spoiler<T>[];
    }) =>
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
                    `Bug on typia.protobuf.assertEncode(): failed to understand ${factory.constructor.name} type.`,
                );
        } catch {
            throw new Error(
                `Bug on typia.protobuf.assertEncode(): wrong encode for ${factory.constructor.name} type.`,
            );
        }

        for (const spoil of factory.SPOILERS ?? []) {
            const elem: T = factory.generate();
            const expected: string[] = spoil(elem);

            try {
                functor.encode(elem);
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
