import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ArraySimplePointer } from "../../../structures/ArraySimplePointer";

export const test_misc_isClone_ArraySimplePointer =
    _test_misc_isClone<ArraySimplePointer>(ArraySimplePointer)((input) =>
        ((input: any): typia.Primitive<ArraySimplePointer> | null => {
            const is = (input: any): input is ArraySimplePointer => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.email &&
                    Array.isArray(input.hobbies) &&
                    input.hobbies.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    );
                const $io2 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.body &&
                    "number" === typeof input.rank &&
                    Number.isFinite(input.rank);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const clone = (
                input: ArraySimplePointer,
            ): typia.Primitive<ArraySimplePointer> => {
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.email &&
                    Array.isArray(input.hobbies) &&
                    input.hobbies.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    );
                const $io2 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.body &&
                    "number" === typeof input.rank;
                const $cp0 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co1(elem)
                            : (elem as any),
                    );
                const $cp1 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co2(elem)
                            : (elem as any),
                    );
                const $co0 = (input: any): any => ({
                    value: Array.isArray(input.value)
                        ? $cp0(input.value)
                        : (input.value as any),
                });
                const $co1 = (input: any): any => ({
                    name: input.name as any,
                    email: input.email as any,
                    hobbies: Array.isArray(input.hobbies)
                        ? $cp1(input.hobbies)
                        : (input.hobbies as any),
                });
                const $co2 = (input: any): any => ({
                    name: input.name as any,
                    body: input.body as any,
                    rank: input.rank as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    );
