import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ConstantAtomicWrapper = _test_clone("ConstantAtomicWrapper", ConstantAtomicWrapper.generate, (input: ConstantAtomicWrapper): typia.Primitive<ConstantAtomicWrapper> => {
    const $io0 = (input: any) => "boolean" === typeof input.value;
    const $io1 = (input: any) => "number" === typeof input.value;
    const $io2 = (input: any) => "string" === typeof input.value;
    const $co0 = (input: any) => ({
        value: input.value
    });
    const $co1 = (input: any) => ({
        value: input.value
    });
    const $co2 = (input: any) => ({
        value: input.value
    });
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2]))) ? [
        "object" === typeof input[0] && null !== input[0] ? $co0(input[0]) : input[0],
        "object" === typeof input[1] && null !== input[1] ? $co1(input[1]) : input[1],
        "object" === typeof input[2] && null !== input[2] ? $co2(input[2]) : input[2]
    ] : input;
});
