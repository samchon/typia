import typia from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_ToJsonAtomicSimple = _test_isStringify("ToJsonAtomicSimple", ToJsonAtomicSimple.generate, (input) => ((input: ToJsonAtomicSimple): string | null => { const is = (input: any): input is ToJsonAtomicSimple => {
    const $io0 = (input: any) => true;
    const $io1 = (input: any) => true;
    const $io2 = (input: any) => true;
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2])));
}; const stringify = (input: ToJsonAtomicSimple): string => {
    const $string = (typia.isStringify as any).string;
    return `[${input[0].toJSON()},${input[1].toJSON()},${$string(input[2].toJSON())}]`;
}; return is(input) ? stringify(input) : null; })(input));
