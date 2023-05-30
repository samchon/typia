import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
export const test_createValidateClone_ObjectDynamic = _test_validateClone("ObjectDynamic", ObjectDynamic.generate, (input: any): typia.IValidation<typia.Primitive<ObjectDynamic>> => { const validate = (input: any): typia.IValidation<ObjectDynamic> => {
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
    const $report = (typia.createValidateClone as any).report(errors);
    const $join = (typia.createValidateClone as any).join;
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
}; const clone = (input: ObjectDynamic): typia.Primitive<ObjectDynamic> => {
    const $join = (typia.createValidateClone as any).join;
    const $co0 = (input: any): any => { const output = {} as any; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = value as any;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, ObjectDynamic.SPOILERS);
