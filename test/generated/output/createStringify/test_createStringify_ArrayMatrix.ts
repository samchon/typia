import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_createStringify_ArrayMatrix = _test_stringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input: Array<Array<Array<number>>>): string => {
        const $number = (typia.createStringify as any).number;
        return `[${input
            .map(
                (elem: any) =>
                    `[${elem
                        .map(
                            (elem: any) =>
                                `[${elem
                                    .map((elem: any) => $number(elem))
                                    .join(",")}]`,
                        )
                        .join(",")}]`,
            )
            .join(",")}]`;
    },
);
