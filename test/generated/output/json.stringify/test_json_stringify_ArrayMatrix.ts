import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_json_stringify_ArrayMatrix =
    _test_json_stringify<ArrayMatrix>(ArrayMatrix)((input) =>
        ((input: Array<Array<Array<number>>>): string => {
            const $number = (typia.json.stringify as any).number;
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
        })(input),
    );
