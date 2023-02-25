import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_ConstantAtomicWrapper = _test_stringify("ConstantAtomicWrapper", ConstantAtomicWrapper.generate, (input) => ((input: ConstantAtomicWrapper): string => {
    const $number = (typia.stringify as any).number;
    const $string = (typia.stringify as any).string;
    return `[${`{"value":${input[0].value}}`},${`{"value":${$number(input[1].value)}}`},${`{"value":${$string(input[2].value)}}`}]`;
})(input));
