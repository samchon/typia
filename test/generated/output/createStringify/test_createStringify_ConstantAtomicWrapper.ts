import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_createStringify_ConstantAtomicWrapper = _test_stringify(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (
        input: [
            ConstantAtomicWrapper.IPointer<boolean>,
            ConstantAtomicWrapper.IPointer<number>,
            ConstantAtomicWrapper.IPointer<string>,
        ],
    ): string => {
        const $number = (typia.createStringify as any).number;
        const $string = (typia.createStringify as any).string;
        return `[${`{"value":${input[0].value}}`},${`{"value":${$number(
            input[1].value,
        )}}`},${`{"value":${$string(input[2].value)}}`}]`;
    },
);
