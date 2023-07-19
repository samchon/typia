import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_json_stringify_TupleHierarchical =
    _test_json_stringify<TupleHierarchical>(TupleHierarchical)((input) =>
        ((
            input: [
                boolean,
                null,
                number,
                [boolean, null, [number, [boolean, string]]],
                [
                    number,
                    Array<
                        [
                            string,
                            boolean,
                            Array<[number, number, [boolean, string]]>,
                        ]
                    >,
                ],
            ],
        ): string => {
            const $number = (typia.json.stringify as any).number;
            const $string = (typia.json.stringify as any).string;
            return `[${input[0]},null,${$number(input[2])},${`[${
                input[3][0]
            },null,${`[${$number(input[3][2][0])},${`[${
                input[3][2][1][0]
            },${$string(input[3][2][1][1])}]`}]`}]`},${`[${$number(
                input[4][0],
            )},${`[${input[4][1]
                .map(
                    (elem: any) =>
                        `[${$string(elem[0])},${elem[1]},${`[${elem[2]
                            .map(
                                (elem: any) =>
                                    `[${$number(elem[0])},${$number(
                                        elem[1],
                                    )},${`[${elem[2][0]},${$string(
                                        elem[2][1],
                                    )}]`}]`,
                            )
                            .join(",")}]`}]`,
                )
                .join(",")}]`}]`}]`;
        })(input),
    );
