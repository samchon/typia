import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_equals_ObjectHttpConstant = _test_equals(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
    ((
        input: any,
        _exceptionable: boolean = true,
    ): input is ObjectHttpConstant => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            false === input.boolean &&
            (BigInt(1) === input.bigint || BigInt(99) === input.bigint) &&
            (2 === input.number || 98 === input.number) &&
            ("something" === input.string ||
                "three" === input.string ||
                "ninety-seven" === input.string) &&
            "string" === typeof input.template &&
            RegExp(/^abcd_(.*)/).test(input.template) &&
            (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        [
                            "boolean",
                            "bigint",
                            "number",
                            "string",
                            "template",
                        ].some((prop: any) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    })(input),
);
