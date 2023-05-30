import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { DynamicTree } from "../../../structures/DynamicTree";
export const test_createValidate_DynamicTree = _test_validate("DynamicTree", DynamicTree.generate, (input: any): typia.IValidation<DynamicTree> => {
    const __is = (input: any): input is DynamicTree => {
        const $io0 = (input: any): boolean => "string" === typeof input.id && ("number" === typeof input.sequence && Number.isFinite(input.sequence)) && ("object" === typeof input.children && null !== input.children && false === Array.isArray(input.children) && $io1(input.children));
        const $io1 = (input: any): boolean => Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return "object" === typeof value && null !== value && $io0(value);
            return true;
        });
        return "object" === typeof input && null !== input && $io0(input);
    };
    const errors = [] as any[];
    const $report = (typia.createValidate as any).report(errors);
    const $join = (typia.createValidate as any).join;
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is DynamicTree => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "string",
                    value: input.id
                }), "number" === typeof input.sequence && Number.isFinite(input.sequence) || $report(_exceptionable, {
                    path: _path + ".sequence",
                    expected: "number",
                    value: input.sequence
                }), ("object" === typeof input.children && null !== input.children && false === Array.isArray(input.children) || $report(_exceptionable, {
                    path: _path + ".children",
                    expected: "Record<string, DynamicTree>",
                    value: input.children
                })) && $vo1(input.children, _path + ".children", true && _exceptionable) || $report(_exceptionable, {
                    path: _path + ".children",
                    expected: "Record<string, DynamicTree>",
                    value: input.children
                })].every((flag: boolean) => flag);
            const $vo1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map(key => {
                    const value = input[key];
                    if (undefined === value)
                        return true;
                    if (RegExp(/(.*)/).test(key))
                        return ("object" === typeof value && null !== value || $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "DynamicTree",
                            value: value
                        })) && $vo0(value, _path + $join(key), true && _exceptionable) || $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "DynamicTree",
                            value: value
                        });
                    return true;
                }).every((flag: boolean) => flag)].every((flag: boolean) => flag);
            return ("object" === typeof input && null !== input || $report(true, {
                path: _path + "",
                expected: "DynamicTree",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "DynamicTree",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}, DynamicTree.SPOILERS);
