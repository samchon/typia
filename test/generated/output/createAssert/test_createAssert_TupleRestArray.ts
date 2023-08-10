import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_assert_TupleRestArray = _test_assert<TupleRestArray>(
    TupleRestArray,
)((input: any): TupleRestArray => {
    const __is = (input: any): input is TupleRestArray => {
        return (
            Array.isArray(input) &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Number.isFinite(input[1]) &&
            Array.isArray(input.slice(2)) &&
            input
                .slice(2)
                .every(
                    (elem: any) =>
                        Array.isArray(elem) &&
                        elem.every((elem: any) => "string" === typeof elem),
                )
        );
    };
    if (false === __is(input))
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TupleRestArray => {
            const $guard = (typia.createAssert as any).guard;
            return (
                ((Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TupleRestArray",
                        value: input,
                    })) &&
                    ("boolean" === typeof input[0] ||
                        $guard(true, {
                            path: _path + "[0]",
                            expected: "boolean",
                            value: input[0],
                        })) &&
                    (("number" === typeof input[1] &&
                        Number.isFinite(input[1])) ||
                        $guard(true, {
                            path: _path + "[1]",
                            expected: "number",
                            value: input[1],
                        })) &&
                    (((Array.isArray(input.slice(2)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "...Array<string>",
                            value: input.slice(2),
                        })) &&
                        input.slice(2).every(
                            (elem: any, _index1: number) =>
                                ((Array.isArray(elem) ||
                                    $guard(true, {
                                        path: _path + "[" + (2 + _index1) + "]",
                                        expected: "Array<string>",
                                        value: elem,
                                    })) &&
                                    elem.every(
                                        (elem: any, _index2: number) =>
                                            "string" === typeof elem ||
                                            $guard(true, {
                                                path:
                                                    _path +
                                                    "[" +
                                                    (2 + _index1) +
                                                    "][" +
                                                    _index2 +
                                                    "]",
                                                expected: "string",
                                                value: elem,
                                            }),
                                    )) ||
                                $guard(true, {
                                    path: _path + "[" + (2 + _index1) + "]",
                                    expected: "Array<string>",
                                    value: elem,
                                }),
                        )) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "...Array<string>",
                            value: input.slice(2),
                        }))) ||
                $guard(true, {
                    path: _path + "",
                    expected: "TupleRestArray",
                    value: input,
                })
            );
        })(input, "$input", true);
    return input;
});
