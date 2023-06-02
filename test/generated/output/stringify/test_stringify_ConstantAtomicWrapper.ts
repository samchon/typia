import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_stringify_ConstantAtomicWrapper = _test_stringify(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) =>
        ((
            input: [
                ConstantAtomicWrapper.IPointer<boolean>,
                ConstantAtomicWrapper.IPointer<number>,
                ConstantAtomicWrapper.IPointer<string>,
            ],
        ): string => {
            const $number: any = (typia.stringify as any).number;
            const $string: any = (typia.stringify as any).string;
            return `[${`{"value":${input[0].value}}`},${`{"value":${$number(
                input[1].value,
            )}}`},${`{"value":${$string(input[2].value)}}`}]`;
        })(input),
);
