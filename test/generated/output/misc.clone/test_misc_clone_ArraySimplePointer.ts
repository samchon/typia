import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ArraySimplePointer } from "../../../structures/ArraySimplePointer";

export const test_misc_clone_ArraySimplePointer =
    _test_misc_clone<ArraySimplePointer>(ArraySimplePointer)((input) =>
        ((input: ArraySimplePointer): typia.Primitive<ArraySimplePointer> => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.name &&
                "string" === typeof input.email &&
                Array.isArray(input.hobbies) &&
                input.hobbies.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
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
        })(input),
    );
