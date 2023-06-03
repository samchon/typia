import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_assertEquals_TupleRestAtomic = _test_assertEquals(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) =>
        ((input: any): [boolean, number, ...string[]] => {
            const __is = (
                input: any,
                _exceptionable: boolean = true,
            ): input is [boolean, number, ...string[]] => {
                return (
                    Array.isArray(input) &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Number.isFinite(input[1]) &&
                    Array.isArray(input.slice(2)) &&
                    input
                        .slice(2)
                        .every(
                            (elem: any, _index1: number) =>
                                "string" === typeof elem,
                        )
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is [boolean, number, ...string[]] => {
                    const $guard = (typia.assertEquals as any).guard;
                    return (
                        ((Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TupleRestAtomic",
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
                                    expected: "...string",
                                    value: input.slice(2),
                                })) &&
                                input.slice(2).every(
                                    (elem: any, _index1: number) =>
                                        "string" === typeof elem ||
                                        $guard(true, {
                                            path:
                                                _path +
                                                "[" +
                                                (2 + _index1) +
                                                "]",
                                            expected: "string",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "...string",
                                    value: input.slice(2),
                                }))) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TupleRestAtomic",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        })(input),
);
