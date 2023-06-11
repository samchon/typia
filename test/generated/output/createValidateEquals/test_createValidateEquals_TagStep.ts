import typia from "../../../../src";
import { TagStep } from "../../../structures/TagStep";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
export const test_createValidateEquals_TagStep = _test_validateEquals("TagStep", TagStep.generate, (input: any): typia.IValidation<TagStep> => {
    const errors = [] as any[];
    const $report = (typia.createValidateEquals as any).report(errors);
    const __is = (input: any, _exceptionable: boolean = true): input is TagStep => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean => "number" === typeof input.exclusiveMinimum && 0 === input.exclusiveMinimum % 5 - 3 && 3 < input.exclusiveMinimum && ("number" === typeof input.minimum && 0 === input.minimum % 5 - 3 && 3 <= input.minimum) && ("number" === typeof input.range && 0 === input.range % 5 - 0 && 0 < input.range && 100 > input.range) && ("number" === typeof input.multipleOf && 0 === input.multipleOf % 5 && 3 <= input.multipleOf && 99 >= input.multipleOf) && (4 === Object.keys(input).length || Object.keys(input).every((key: any) => {
            if (["exclusiveMinimum", "minimum", "range", "multipleOf"].some((prop: any) => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return false;
        }));
        return Array.isArray(input) && input.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io0(elem, true));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is TagStep => {
            const $join = (typia.createValidateEquals as any).join;
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["number" === typeof input.exclusiveMinimum && (0 === input.exclusiveMinimum % 5 - 3 || $report(_exceptionable, {
                    path: _path + ".exclusiveMinimum",
                    expected: "number (@step 5)",
                    value: input.exclusiveMinimum
                })) && (3 < input.exclusiveMinimum || $report(_exceptionable, {
                    path: _path + ".exclusiveMinimum",
                    expected: "number (@exclusiveMinimum 3)",
                    value: input.exclusiveMinimum
                })) || $report(_exceptionable, {
                    path: _path + ".exclusiveMinimum",
                    expected: "number",
                    value: input.exclusiveMinimum
                }), "number" === typeof input.minimum && (0 === input.minimum % 5 - 3 || $report(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "number (@step 5)",
                    value: input.minimum
                })) && (3 <= input.minimum || $report(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "number (@minimum 3)",
                    value: input.minimum
                })) || $report(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "number",
                    value: input.minimum
                }), "number" === typeof input.range && (0 === input.range % 5 - 0 || $report(_exceptionable, {
                    path: _path + ".range",
                    expected: "number (@step 5)",
                    value: input.range
                })) && (0 < input.range || $report(_exceptionable, {
                    path: _path + ".range",
                    expected: "number (@exclusiveMinimum 0)",
                    value: input.range
                })) && (100 > input.range || $report(_exceptionable, {
                    path: _path + ".range",
                    expected: "number (@exclusiveMaximum 100)",
                    value: input.range
                })) || $report(_exceptionable, {
                    path: _path + ".range",
                    expected: "number",
                    value: input.range
                }), "number" === typeof input.multipleOf && (0 === input.multipleOf % 5 || $report(_exceptionable, {
                    path: _path + ".multipleOf",
                    expected: "number (@multipleOf 5)",
                    value: input.multipleOf
                })) && (3 <= input.multipleOf || $report(_exceptionable, {
                    path: _path + ".multipleOf",
                    expected: "number (@minimum 3)",
                    value: input.multipleOf
                })) && (99 >= input.multipleOf || $report(_exceptionable, {
                    path: _path + ".multipleOf",
                    expected: "number (@maximum 99)",
                    value: input.multipleOf
                })) || $report(_exceptionable, {
                    path: _path + ".multipleOf",
                    expected: "number",
                    value: input.multipleOf
                }), 4 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map((key: any) => {
                    if (["exclusiveMinimum", "minimum", "range", "multipleOf"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value)
                        return true;
                    return $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value
                    });
                }).every((flag: boolean) => flag))].every((flag: boolean) => flag);
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "TagStep",
                value: input
            })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagStep.Type",
                value: elem
            })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagStep.Type",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "TagStep",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
});
