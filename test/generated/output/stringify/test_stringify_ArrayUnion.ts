import typia from "../../../../src";
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ArrayUnion = _test_stringify(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) =>
        ((input: ArrayUnion): string => {
            const $string = (typia.stringify as any).string;
            const $number = (typia.stringify as any).number;
            const $throws = (typia.stringify as any).throws;
            return `[${input
                .map((elem: any) =>
                    (() => {
                        if (0 === elem.length) return "[]";
                        const tupleList = [
                            [
                                (top: any) => "string" === typeof top,
                                (top: any) =>
                                    `[${top
                                        .map((elem: any) => $string(elem))
                                        .join(",")}]`,
                            ],
                            [
                                (top: any) => "boolean" === typeof top,
                                (top: any) =>
                                    `[${top
                                        .map((elem: any) => elem)
                                        .join(",")}]`,
                            ],
                            [
                                (top: any) => "number" === typeof top,
                                (top: any) =>
                                    `[${top
                                        .map((elem: any) => $number(elem))
                                        .join(",")}]`,
                            ],
                        ];
                        const front = elem[0];
                        const filtered = tupleList.filter(
                            (tuple) => true === tuple[0](front),
                        );
                        if (1 === filtered.length) return filtered[0][1](elem);
                        const array = elem;
                        if (1 < filtered.length)
                            for (const tuple of filtered)
                                if (
                                    array.every(
                                        (value: any) =>
                                            true === tuple[0](value),
                                    )
                                )
                                    return tuple[1](array);
                        $throws({
                            expected:
                                "(Array<string> | Array<boolean> | Array<number>)",
                            value: elem,
                        });
                    })(),
                )
                .join(",")}]`;
        })(input),
);
