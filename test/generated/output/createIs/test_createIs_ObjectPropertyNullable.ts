import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";
export const test_createIs_ObjectPropertyNullable = _test_is("ObjectPropertyNullable", ObjectPropertyNullable.generate, (input: any): input is ObjectPropertyNullable => {
    const $io0 = (input: any): boolean => null === input.value || "boolean" === typeof input.value;
    const $io1 = (input: any): boolean => null === input.value || "number" === typeof input.value && Number.isFinite(input.value);
    const $io2 = (input: any): boolean => null === input.value || "string" === typeof input.value;
    const $io3 = (input: any): boolean => null === input.value || "object" === typeof input.value && null !== input.value && $io4(input.value);
    const $io4 = (input: any): boolean => "string" === typeof input.id && (null === input.name || "string" === typeof input.name) && (undefined === input.grade || "number" === typeof input.grade && Number.isFinite(input.grade)) && (null === input.serial || undefined === input.serial || "number" === typeof input.serial && Number.isFinite(input.serial)) && (null === input.activated || "boolean" === typeof input.activated);
    return Array.isArray(input) && (input.length === 4 && (Array.isArray(input[0]) && input[0].every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem))) && (Array.isArray(input[1]) && input[1].every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem))) && (Array.isArray(input[2]) && input[2].every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && (Array.isArray(input[3]) && input[3].every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem))));
}, ObjectPropertyNullable.SPOILERS);
