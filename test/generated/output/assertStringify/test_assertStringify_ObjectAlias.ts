import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_assertStringify_ObjectAlias = _test_assertStringify("ObjectAlias", ObjectAlias.generate, (input) => ((input: ObjectAlias): string => { const assert = (input: any) => {
    const $guard = (typia.assertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectAlias => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.email || $guard(_exceptionable, {
            path: _path + ".email",
            expected: "string",
            value: input.email
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (1 === input.sex || 2 === input.sex || "male" === input.sex || "female" === input.sex || $guard(_exceptionable, {
            path: _path + ".sex",
            expected: "(\"female\" | \"male\" | 1 | 2)",
            value: input.sex
        })) && ("number" === typeof input.age && !Number.isNaN(input.age) || $guard(_exceptionable, {
            path: _path + ".age",
            expected: "number",
            value: input.age
        })) && ("boolean" === typeof input.dead || $guard(_exceptionable, {
            path: _path + ".dead",
            expected: "boolean",
            value: input.dead
        }));
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<ObjectAlias.IMember>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ObjectAlias.IMember>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as ObjectAlias;
}; const stringify = (input: ObjectAlias): string => {
    const $string = (typia.assertStringify as any).string;
    const $throws = (typia.assertStringify as any).throws;
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
}; return stringify(assert(input)); })(input), ObjectAlias.SPOILERS);
