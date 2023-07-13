import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_json_stringify_ArrayMatrix = _test_json_stringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input: ArrayMatrix): string => {
        const $number = (typia.json.createStringify as any).number;
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
