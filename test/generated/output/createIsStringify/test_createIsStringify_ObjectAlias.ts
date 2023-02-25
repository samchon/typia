import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_ObjectAlias = _test_isStringify("ObjectAlias", ObjectAlias.generate, (input: ObjectAlias): string | null => { const is = (input: any): input is ObjectAlias => {
    const $io0 = (input: any) => "string" === typeof input.id && "string" === typeof input.email && "string" === typeof input.name && (1 === input.sex || 2 === input.sex || "male" === input.sex || "female" === input.sex) && ("number" === typeof input.age && !Number.isNaN(input.age)) && "boolean" === typeof input.dead;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const stringify = (input: ObjectAlias): string => {
    const $string = (typia.createIsStringify as any).string;
    const $throws = (typia.createIsStringify as any).throws;
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
}; return is(input) ? stringify(input) : null; }, ObjectAlias.SPOILERS);
