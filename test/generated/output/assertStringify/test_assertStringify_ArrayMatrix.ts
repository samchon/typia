import typia from "../../../../src";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ArrayMatrix = _test_assertStringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) =>
        ((input: any): string => {
            const assert = (input: any): ArrayMatrix => {
                const $guard = (typia.assertStringify as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ArrayMatrix => {
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Array<Array<Array<number>>>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (Array.isArray(elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "Array<Array<number>>",
                                        value: elem,
                                    })) &&
                                elem.every(
                                    (elem: any, _index2: number) =>
                                        (Array.isArray(elem) ||
                                            $guard(true, {
                                                path:
                                                    _path +
                                                    "[" +
                                                    _index1 +
                                                    "][" +
                                                    _index2 +
                                                    "]",
                                                expected: "Array<number>",
                                                value: elem,
                                            })) &&
                                        elem.every(
                                            (elem: any, _index3: number) =>
                                                ("number" === typeof elem &&
                                                    Number.isFinite(elem)) ||
                                                $guard(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "][" +
                                                        _index2 +
                                                        "][" +
                                                        _index3 +
                                                        "]",
                                                    expected: "number",
                                                    value: elem,
                                                }),
                                        ),
                                ),
                        )
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (input: ArrayMatrix): string => {
                const $number = (typia.assertStringify as any).number;
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
            return stringify(assert(input));
        })(input),
    ArrayMatrix.SPOILERS,
);
