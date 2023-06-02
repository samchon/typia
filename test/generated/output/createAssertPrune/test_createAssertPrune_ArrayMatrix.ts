import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_createAssertPrune_ArrayMatrix = _test_assertPrune(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input: any): ArrayMatrix => {
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
            const $guard: any = (typia.createAssertPrune as any).guard;
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
        const prune: any = (input: ArrayMatrix): void => {};
        assert(input);
        prune(input);
        return input;
    },
    ArrayMatrix.SPOILERS,
);
