import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_ObjectAlias = _test_validateClone("ObjectAlias", ObjectAlias.generate, (input: any): typia.IValidation<typia.Primitive<ObjectAlias>> => { const validate = (input: any): typia.IValidation<ObjectAlias> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
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
}; const clone = (input: ObjectAlias): typia.Primitive<ObjectAlias> => {
    const $co0 = (input: any) => ({
        id: input.id,
        email: input.email,
        name: input.name,
        sex: input.sex,
        age: input.age,
        dead: input.dead
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, ObjectAlias.SPOILERS);
