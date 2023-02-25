import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_isParse } from "../internal/_test_isParse";
export const test_createIsParse_ObjectPropertyNullable = _test_isParse("ObjectPropertyNullable", ObjectPropertyNullable.generate, (input: any): typia.Primitive<ObjectPropertyNullable> => { const is = (input: any): input is ObjectPropertyNullable => {
    const $io0 = (input: any) => "boolean" === typeof input.value;
    const $io1 = (input: any) => "number" === typeof input.value;
    const $io2 = (input: any) => "string" === typeof input.value;
    const $io3 = (input: any) => "object" === typeof input.value && null !== input.value && $io4(input.value);
    const $io4 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && (undefined === input.grade || "number" === typeof input.grade) && (undefined === input.serial || "number" === typeof input.serial) && "boolean" === typeof input.activated;
    return Array.isArray(input) && (input.length === 4 && (Array.isArray(input[0]) && input[0].every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem))) && (Array.isArray(input[1]) && input[1].every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem))) && (Array.isArray(input[2]) && input[2].every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && (Array.isArray(input[3]) && input[3].every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem))));
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ObjectPropertyNullable.SPOILERS);
