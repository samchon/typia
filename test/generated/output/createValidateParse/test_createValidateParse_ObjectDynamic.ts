import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
export const test_createValidateParse_ObjectDynamic = _test_validateParse("ObjectDynamic", ObjectDynamic.generate, (input: string): typia.IValidation<typia.Primitive<ObjectDynamic>> => { const validate = (input: any): typia.IValidation<ObjectDynamic> => {
    const __is = (input: any): input is ObjectDynamic => {
        const $io0 = (input: any): boolean => Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return "string" === typeof value || "number" === typeof value && Number.isFinite(value) || "boolean" === typeof value;
            return true;
        });
        return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
    };
    const errors = [] as any[];
    const $report = (typia.createValidateParse as any).report(errors);
    const $join = (typia.createValidateParse as any).join;
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectDynamic => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map(key => {
                    const value = input[key];
                    if (undefined === value)
                        return true;
                    if (RegExp(/(.*)/).test(key))
                        return "string" === typeof value || "number" === typeof value && Number.isFinite(value) || "boolean" === typeof value || $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "(boolean | number | string)",
                            value: value
                        });
                    return true;
                }).every((flag: boolean) => flag)].every((flag: boolean) => flag);
            return ("object" === typeof input && null !== input && false === Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "ObjectDynamic",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "ObjectDynamic",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; input = JSON.parse(input); const output = validate(input); return output as any; }, ObjectDynamic.SPOILERS);
