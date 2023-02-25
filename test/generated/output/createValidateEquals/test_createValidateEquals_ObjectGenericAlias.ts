import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validateEquals } from "../internal/_test_validateEquals";
export const test_createValidateEquals_ObjectGenericAlias = _test_validateEquals("ObjectGenericAlias", ObjectGenericAlias.generate, (input: any): typia.IValidation<Alias> => {
    const errors = [] as any[];
    const $report = (typia.createValidateEquals as any).report(errors);
    const $join = (typia.createValidateEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is Alias => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "string",
                value: input.value
            }), 1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                if (["value"].some(prop => key === prop))
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
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectGenericAlias.Alias>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectGenericAlias.Alias>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<Alias>;
});
