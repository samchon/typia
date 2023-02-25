import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_ConstantAtomicWrapper = _test_stringify("ConstantAtomicWrapper", ConstantAtomicWrapper.generate, (input: ConstantAtomicWrapper): string => {
    const $string = (typia.createStringify as any).string;
    return `[${`{"value":${input[0].value}}`},${`{"value":${input[1].value}}`},${`{"value":${$string(input[2].value)}}`}]`;
});
