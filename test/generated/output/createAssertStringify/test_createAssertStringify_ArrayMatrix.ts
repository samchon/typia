import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_createAssertStringify_ArrayMatrix = _test_assertStringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input: any): string => {
        const assert: any = (input: any): ArrayMatrix => {
            const __is: any = (input: any): input is ArrayMatrix => {
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
            const $guard: any = (typia.createAssertStringify as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ArrayMatrix => {
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ArrayMatrix",
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
        const stringify: any = (input: ArrayMatrix): string => {
            const $number: any = (typia.createAssertStringify as any).number;
            return (() =>
                `[${input
                    .map((elem: any) =>
                        (() =>
                            `[${elem
                                .map((elem: any) =>
                                    (() =>
                                        `[${elem
                                            .map((elem: any) => $number(elem))
                                            .join(",")}]`)(),
                                )
                                .join(",")}]`)(),
                    )
                    .join(",")}]`)();
        };
        return stringify(assert(input));
    },
    ArrayMatrix.SPOILERS,
);
