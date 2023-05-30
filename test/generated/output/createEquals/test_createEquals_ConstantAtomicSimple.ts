import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
export const test_createEquals_ConstantAtomicSimple = _test_equals("ConstantAtomicSimple", ConstantAtomicSimple.generate, (input: any, _exceptionable: boolean = true): input is ConstantAtomicSimple => {
    return Array.isArray(input) && (input.length === 4 && false === input[0] && true === input[1] && 2 === input[2] && "three" === input[3]);
});
