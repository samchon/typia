import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_ObjectPropertyNullable = _test_isStringify("ObjectPropertyNullable", ObjectPropertyNullable.generate, (input) => ((input: ObjectPropertyNullable): string | null => { const is = (input: any): input is ObjectPropertyNullable => {
    const $io0 = (input: any) => "boolean" === typeof input.value;
    const $io1 = (input: any) => "number" === typeof input.value && !Number.isNaN(input.value);
    const $io2 = (input: any) => "string" === typeof input.value;
    const $io3 = (input: any) => "object" === typeof input.value && null !== input.value && $io4(input.value);
    const $io4 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && (undefined === input.grade || "number" === typeof input.grade && !Number.isNaN(input.grade)) && (undefined === input.serial || "number" === typeof input.serial && !Number.isNaN(input.serial)) && "boolean" === typeof input.activated;
    return Array.isArray(input) && (input.length === 4 && (Array.isArray(input[0]) && input[0].every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem))) && (Array.isArray(input[1]) && input[1].every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem))) && (Array.isArray(input[2]) && input[2].every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && (Array.isArray(input[3]) && input[3].every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem))));
}; const stringify = (input: ObjectPropertyNullable): string => {
    const $string = (typia.isStringify as any).string;
    const $io4 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && (undefined === input.grade || "number" === typeof input.grade) && (undefined === input.serial || "number" === typeof input.serial) && "boolean" === typeof input.activated;
    const $so3 = (input: any) => `{"value":${$so4(input.value)}}`;
    const $so4 = (input: any) => `{${undefined === input.grade ? "" : `"grade":${undefined !== input.grade ? input.grade : undefined},`}${undefined === input.serial ? "" : `"serial":${undefined !== input.serial ? input.serial : undefined},`}"id":${$string(input.id)},"name":${$string(input.name)},"activated":${input.activated}}`;
    return `[${`[${input[0].map((elem: any) => `{"value":${elem.value}}`).join(",")}]`},${`[${input[1].map((elem: any) => `{"value":${elem.value}}`).join(",")}]`},${`[${input[2].map((elem: any) => `{"value":${$string(elem.value)}}`).join(",")}]`},${`[${input[3].map((elem: any) => $so3(elem)).join(",")}]`}]`;
}; return is(input) ? stringify(input) : null; })(input), ObjectPropertyNullable.SPOILERS);
