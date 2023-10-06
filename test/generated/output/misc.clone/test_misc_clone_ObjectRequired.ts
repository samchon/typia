import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_misc_clone_ObjectRequired = _test_misc_clone(
    "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input) =>
    ((input: ObjectRequired): typia.Resolved<ObjectRequired> => {
        const $io1 = (input: any): boolean =>
            (undefined === input.boolean ||
                "boolean" === typeof input.boolean) &&
            (undefined === input.number || "number" === typeof input.number) &&
            (undefined === input.string || "string" === typeof input.string) &&
            (undefined === input.array ||
                (Array.isArray(input.array) &&
                    input.array.every(
                        (elem: any) => "number" === typeof elem,
                    ))) &&
            (null === input.object ||
                undefined === input.object ||
                ("object" === typeof input.object &&
                    null !== input.object &&
                    false === Array.isArray(input.object) &&
                    $io1(input.object)));
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        const $co0 = (input: any): any => ({
            boolean: input.boolean as any,
            number: input.number as any,
            string: input.string as any,
            array: Array.isArray(input.array)
                ? $cp0(input.array)
                : (input.array as any),
            object:
                "object" === typeof input.object && null !== input.object
                    ? $co1(input.object)
                    : (input.object as any),
        });
        const $co1 = (input: any): any => ({
            boolean: input.boolean as any,
            number: input.number as any,
            string: input.string as any,
            array: Array.isArray(input.array)
                ? $cp0(input.array)
                : (input.array as any),
            object:
                "object" === typeof input.object && null !== input.object
                    ? $co1(input.object)
                    : (input.object as any),
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    })(input),
);
