import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_createStringify_ArrayAtomicAlias = _test_stringify(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input: ArrayAtomicAlias): string => {
        const $number: any = (typia.createStringify as any).number;
        const $string: any = (typia.createStringify as any).string;
        return `[${(() =>
            `[${input[0].map((elem: any) => elem).join(",")}]`)()},${(() =>
            `[${input[1]
                .map((elem: any) => $number(elem))
                .join(",")}]`)()},${(() =>
            `[${input[2].map((elem: any) => $string(elem)).join(",")}]`)()}]`;
    },
);
