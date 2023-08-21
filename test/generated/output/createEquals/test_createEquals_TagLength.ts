import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TagLength } from "../../../structures/TagLength";

export const test_equals_TagLength = _test_equals("TagLength")<TagLength>(
    TagLength,
)((input: any, _exceptionable: boolean = true): input is TagLength => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
            (elem: any, _index1: number) =>
                "object" === typeof elem &&
                null !== elem &&
                $io1(elem, true && _exceptionable),
        ) &&
        (1 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
            }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
        "string" === typeof input.fixed &&
        5 === input.fixed.length &&
        "string" === typeof input.minimum &&
        3 <= input.minimum.length &&
        "string" === typeof input.maximum &&
        7 >= input.maximum.length &&
        "string" === typeof input.minimum_and_maximum &&
        3 <= input.minimum_and_maximum.length &&
        7 >= input.minimum_and_maximum.length &&
        "string" === typeof input.equal &&
        10 <= input.equal.length &&
        19 >= input.equal.length &&
        (5 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
                if (
                    [
                        "fixed",
                        "minimum",
                        "maximum",
                        "minimum_and_maximum",
                        "equal",
                    ].some((prop: any) => key === prop)
                )
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
            }));
    return "object" === typeof input && null !== input && $io0(input, true);
});
