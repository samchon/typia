import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_ObjectAlias = _test_stringify("ObjectAlias", ObjectAlias.generate, (input: ObjectAlias): string => {
    const $string = (typia.createStringify as any).string;
    const $throws = (typia.createStringify as any).throws;
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
});
