import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_assertClone_ArrayMatrix = _test_assertClone(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<Array<Array<number>>>> => {
            const assert = (input: any): Array<Array<Array<number>>> => {
                const $guard = (typia.assertClone as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<Array<Array<number>>> => {
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
            const clone = (
                input: Array<Array<Array<number>>>,
            ): typia.Primitive<Array<Array<Array<number>>>> => {
                return Array.isArray(input)
                    ? input.map((elem: any) =>
                          Array.isArray(elem)
                              ? elem.map((elem: any) =>
                                    Array.isArray(elem)
                                        ? elem.map((elem: any) => elem as any)
                                        : (elem as any),
                                )
                              : (elem as any),
                      )
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    ArrayMatrix.SPOILERS,
);
