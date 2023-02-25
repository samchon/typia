import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_ObjectPropertyNullable = _test_stringify("ObjectPropertyNullable", ObjectPropertyNullable.generate, (input) => ((input: ObjectPropertyNullable): string => {
    const $number = (typia.stringify as any).number;
    const $string = (typia.stringify as any).string;
    const $io4 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && (undefined === input.grade || "number" === typeof input.grade) && (undefined === input.serial || "number" === typeof input.serial) && "boolean" === typeof input.activated;
    const $so3 = (input: any) => `{"value":${$so4(input.value)}}`;
    const $so4 = (input: any) => `{${undefined === input.grade ? "" : `"grade":${undefined !== input.grade ? $number(input.grade) : undefined},`}${undefined === input.serial ? "" : `"serial":${undefined !== input.serial ? $number(input.serial) : undefined},`}"id":${$string(input.id)},"name":${$string(input.name)},"activated":${input.activated}}`;
    return `[${`[${input[0].map((elem: any) => `{"value":${elem.value}}`).join(",")}]`},${`[${input[1].map((elem: any) => `{"value":${$number(elem.value)}}`).join(",")}]`},${`[${input[2].map((elem: any) => `{"value":${$string(elem.value)}}`).join(",")}]`},${`[${input[3].map((elem: any) => $so3(elem)).join(",")}]`}]`;
})(input));
