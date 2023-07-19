import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_json_isStringify_ArrayMatrix =
    _test_json_isStringify<ArrayMatrix>(ArrayMatrix)((input) =>
        ((input: Array<Array<Array<number>>>): string | null => {
            const is = (input: any): input is Array<Array<Array<number>>> => {
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            Array.isArray(elem) &&
                            elem.every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.every(
                                        (elem: any) =>
                                            "number" === typeof elem &&
                                            Number.isFinite(elem),
                                    ),
                            ),
                    )
                );
            };
            const stringify = (input: Array<Array<Array<number>>>): string => {
                const $number = (typia.json.isStringify as any).number;
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
            };
            return is(input) ? stringify(input) : null;
        })(input),
    );
