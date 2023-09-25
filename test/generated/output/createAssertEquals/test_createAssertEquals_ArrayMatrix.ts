import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_createAssertEquals_ArrayMatrix = _test_assertEquals(
    "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)((input: any): ArrayMatrix => {
    const __is = (
        input: any,
        _exceptionable: boolean = true,
    ): input is ArrayMatrix => {
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any, _index1: number) =>
                    Array.isArray(elem) &&
                    elem.every(
                        (elem: any, _index2: number) =>
                            Array.isArray(elem) &&
                            elem.every(
                                (elem: any, _index3: number) =>
                                    "number" === typeof elem &&
                                    Number.isFinite(elem),
                            ),
                    ),
            )
        );
    };
    if (false === __is(input))
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ArrayMatrix => {
            const $guard = (typia.createAssertEquals as any).guard;
            return (
                ((Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ArrayMatrix",
                        value: input,
                    })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            ((Array.isArray(elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "Array<Array<number>>",
                                    value: elem,
                                })) &&
                                elem.every(
                                    (elem: any, _index2: number) =>
                                        ((Array.isArray(elem) ||
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
                                                        Number.isFinite(
                                                            elem,
                                                        )) ||
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
                                            )) ||
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
                                        }),
                                )) ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected: "Array<Array<number>>",
                                value: elem,
                            }),
                    )) ||
                $guard(true, {
                    path: _path + "",
                    expected: "ArrayMatrix",
                    value: input,
                })
            );
        })(input, "$input", true);
    return input;
});
