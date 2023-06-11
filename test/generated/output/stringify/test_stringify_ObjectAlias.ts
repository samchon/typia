import typia from "../../../../src";
import { ObjectAlias } from "../../../structures/ObjectAlias";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_stringify_ObjectAlias = _test_stringify("ObjectAlias", ObjectAlias.generate, (input) => ((input: Array<ObjectAlias.IMember>): string => {
    const $string = (typia.stringify as any).string;
    const $number = (typia.stringify as any).number;
    const $throws = (typia.stringify as any).throws;
    const $so0 = (input: any): any => `{"id":${null !== input.id ? $string(input.id) : "null"},"email":${$string(input.email)},"name":${$string(input.name)},"sex":${null !== input.sex ? (() => {
        if ("string" === typeof input.sex)
            return $string(input.sex);
        if ("number" === typeof input.sex)
            return $number(input.sex);
        if ("string" === typeof input.sex)
            return "\"" + input.sex + "\"";
        $throws({
            expected: "(\"female\" | \"male\" | 1 | 2 | null)",
            value: input.sex
        });
    })() : "null"},"age":${null !== input.age ? $number(input.age) : "null"},"dead":${null !== input.dead ? input.dead : "null"}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
})(input));
