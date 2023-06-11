import typia from "../../../../src";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
import { _test_is } from "../../../internal/_test_is";
export const test_is_ConstantAtomicWrapper = _test_is("ConstantAtomicWrapper", ConstantAtomicWrapper.generate, (input) => ((input: any): input is [ConstantAtomicWrapper.IPointer<boolean>, ConstantAtomicWrapper.IPointer<number>, ConstantAtomicWrapper.IPointer<string>] => {
    const $io0 = (input: any): boolean => "boolean" === typeof input.value;
    const $io1 = (input: any): boolean => "number" === typeof input.value && Number.isFinite(input.value);
    const $io2 = (input: any): boolean => "string" === typeof input.value;
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2])));
})(input), ConstantAtomicWrapper.SPOILERS);
