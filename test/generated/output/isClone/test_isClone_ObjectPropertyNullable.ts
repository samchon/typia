import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_ObjectPropertyNullable = _test_isClone("ObjectPropertyNullable", ObjectPropertyNullable.generate, (input) => ((input: any): typia.Primitive<ObjectPropertyNullable> | null => { const is = (input: any): input is ObjectPropertyNullable => {
    const $io0 = (input: any) => "boolean" === typeof input.value;
    const $io1 = (input: any) => "number" === typeof input.value;
    const $io2 = (input: any) => "string" === typeof input.value;
    const $io3 = (input: any) => "object" === typeof input.value && null !== input.value && $io4(input.value);
    const $io4 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && (undefined === input.grade || "number" === typeof input.grade) && (undefined === input.serial || "number" === typeof input.serial) && "boolean" === typeof input.activated;
    return Array.isArray(input) && (input.length === 4 && (Array.isArray(input[0]) && input[0].every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem))) && (Array.isArray(input[1]) && input[1].every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem))) && (Array.isArray(input[2]) && input[2].every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && (Array.isArray(input[3]) && input[3].every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem))));
}; const clone = (input: ObjectPropertyNullable): typia.Primitive<ObjectPropertyNullable> => {
    const $io0 = (input: any) => "boolean" === typeof input.value;
    const $io1 = (input: any) => "number" === typeof input.value;
    const $io2 = (input: any) => "string" === typeof input.value;
    const $io3 = (input: any) => "object" === typeof input.value && null !== input.value && $io4(input.value);
    const $io4 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && (undefined === input.grade || "number" === typeof input.grade) && (undefined === input.serial || "number" === typeof input.serial) && "boolean" === typeof input.activated;
    const $co0 = (input: any) => ({
        value: input.value
    });
    const $co1 = (input: any) => ({
        value: input.value
    });
    const $co2 = (input: any) => ({
        value: input.value
    });
    const $co3 = (input: any) => ({
        value: "object" === typeof input.value && null !== input.value ? $co4(input.value) : input.value
    });
    const $co4 = (input: any) => ({
        id: input.id,
        name: input.name,
        grade: input.grade,
        serial: input.serial,
        activated: input.activated
    });
    return Array.isArray(input) && (input.length === 4 && (Array.isArray(input[0]) && input[0].every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem))) && (Array.isArray(input[1]) && input[1].every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem))) && (Array.isArray(input[2]) && input[2].every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem))) && (Array.isArray(input[3]) && input[3].every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)))) ? [
        Array.isArray(input[0]) ? input[0].map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input[0],
        Array.isArray(input[1]) ? input[1].map((elem: any) => "object" === typeof elem && null !== elem ? $co1(elem) : elem) : input[1],
        Array.isArray(input[2]) ? input[2].map((elem: any) => "object" === typeof elem && null !== elem ? $co2(elem) : elem) : input[2],
        Array.isArray(input[3]) ? input[3].map((elem: any) => "object" === typeof elem && null !== elem ? $co3(elem) : elem) : input[3]
    ] : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ObjectPropertyNullable.SPOILERS);
