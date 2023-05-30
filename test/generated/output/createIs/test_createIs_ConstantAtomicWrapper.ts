import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
export const test_createIs_ConstantAtomicWrapper = _test_is("ConstantAtomicWrapper", ConstantAtomicWrapper.generate, (input: any): input is ConstantAtomicWrapper => {
    const $io0 = (input: any): boolean => "boolean" === typeof input.value;
    const $io1 = (input: any): boolean => "number" === typeof input.value && Number.isFinite(input.value);
    const $io2 = (input: any): boolean => "string" === typeof input.value;
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2])));
}, ConstantAtomicWrapper.SPOILERS);
