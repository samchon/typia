import typia from "../../../../src";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";
import { _test_isStringify } from "../../../internal/_test_isStringify";
export const test_isStringify_ToJsonAtomicSimple = _test_isStringify("ToJsonAtomicSimple", ToJsonAtomicSimple.generate, (input) => ((input: [ToJsonAtomicSimple.IToJson<boolean>, ToJsonAtomicSimple.IToJson<number>, ToJsonAtomicSimple.IToJson<string>]): string | null => { const is = (input: any): input is [ToJsonAtomicSimple.IToJson<boolean>, ToJsonAtomicSimple.IToJson<number>, ToJsonAtomicSimple.IToJson<string>] => {
    const $io0 = (input: any): boolean => true;
    const $io1 = (input: any): boolean => true;
    const $io2 = (input: any): boolean => true;
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2])));
}; const stringify = (input: [ToJsonAtomicSimple.IToJson<boolean>, ToJsonAtomicSimple.IToJson<number>, ToJsonAtomicSimple.IToJson<string>]): string => {
    const $number = (typia.isStringify as any).number;
    const $string = (typia.isStringify as any).string;
    return `[${input[0].toJSON()},${$number(input[1].toJSON())},${$string(input[2].toJSON())}]`;
}; return is(input) ? stringify(input) : null; })(input));
