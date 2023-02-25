import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_createValidateStringify_ObjectAlias = _test_validateStringify("ObjectAlias", ObjectAlias.generate, (input: ObjectAlias): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<ObjectAlias> => {
    const errors = [] as any[];
    const $report = (typia.createValidateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectAlias => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            }), "string" === typeof input.email || $report(_exceptionable, {
                path: _path + ".email",
                expected: "string",
                value: input.email
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), 1 === input.sex || 2 === input.sex || "male" === input.sex || "female" === input.sex || $report(_exceptionable, {
                path: _path + ".sex",
                expected: "(\"female\" | \"male\" | 1 | 2)",
                value: input.sex
            }), "number" === typeof input.age && !Number.isNaN(input.age) || $report(_exceptionable, {
                path: _path + ".age",
                expected: "number",
                value: input.age
            }), "boolean" === typeof input.dead || $report(_exceptionable, {
                path: _path + ".dead",
                expected: "boolean",
                value: input.dead
            })].every((flag: boolean) => flag);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<ObjectAlias.IMember>>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ObjectAlias.IMember>",
            value: elem
        })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ObjectAlias.IMember>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<ObjectAlias.IMember>>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ObjectAlias>;
}; const stringify = (input: ObjectAlias): string => {
    const $string = (typia.createValidateStringify as any).string;
    const $throws = (typia.createValidateStringify as any).throws;
    const $so0 = (input: any) => `{"id":${$string(input.id)},"email":${$string(input.email)},"name":${$string(input.name)},"sex":${(() => {
        if ("string" === typeof input.sex)
            return $string(input.sex);
        if ("number" === typeof input.sex)
            return input.sex;
        if ("string" === typeof input.sex)
            return "\"" + input.sex + "\"";
        $throws({
            expected: "(\"female\" | \"male\" | 1 | 2)",
            value: input.sex
        });
    })()},"age":${input.age},"dead":${input.dead}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; }, ObjectAlias.SPOILERS);
