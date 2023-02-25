import typia from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_SetSimple = _test_isClone("SetSimple", SetSimple.generate, (input) => ((input: any): typia.Primitive<SetSimple> | null => { const is = (input: any): input is SetSimple => {
    const $io0 = (input: any) => input.booleans instanceof Set && [...input.booleans].every((elem: any) => "boolean" === typeof elem) && (input.numbers instanceof Set && [...input.numbers].every((elem: any) => "number" === typeof elem)) && (input.strings instanceof Set && [...input.strings].every((elem: any) => "string" === typeof elem)) && (input.arrays instanceof Set && [...input.arrays].every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "number" === typeof elem))) && (input.objects instanceof Set && [...input.objects].every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)));
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: SetSimple): typia.Primitive<SetSimple> => {
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    const $co0 = (input: any) => ({
        booleans: input.booleans instanceof Set ? {} : input.booleans,
        numbers: input.numbers instanceof Set ? {} : input.numbers,
        strings: input.strings instanceof Set ? {} : input.strings,
        arrays: input.arrays instanceof Set ? {} : input.arrays,
        objects: input.objects instanceof Set ? {} : input.objects
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), SetSimple.SPOILERS);
