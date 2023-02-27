import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_createStringify_ArrayAtomicSimple = _test_stringify(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input: ArrayAtomicSimple): string => {
        const $number = (typia.createStringify as any).number;
        const $string = (typia.createStringify as any).string;
        return `[${`[${input[0]
            .map((elem: any) => elem)
            .join(",")}]`},${`[${input[1]
            .map((elem: any) => $number(elem))
            .join(",")}]`},${`[${input[2]
            .map((elem: any) => $string(elem))
            .join(",")}]`}]`;
    },
);
