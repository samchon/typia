import typia from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_is } from "../internal/_test_is";
export const test_createIs_SetSimple = _test_is("SetSimple", SetSimple.generate, (input: any): input is SetSimple => {
    const $io0 = (input: any) => input.booleans instanceof Set && [...input.booleans].every((elem: any) => "boolean" === typeof elem) && (input.numbers instanceof Set && [...input.numbers].every((elem: any) => "number" === typeof elem)) && (input.strings instanceof Set && [...input.strings].every((elem: any) => "string" === typeof elem)) && (input.arrays instanceof Set && [...input.arrays].every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "number" === typeof elem))) && (input.objects instanceof Set && [...input.objects].every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)));
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    return "object" === typeof input && null !== input && $io0(input);
}, SetSimple.SPOILERS);
