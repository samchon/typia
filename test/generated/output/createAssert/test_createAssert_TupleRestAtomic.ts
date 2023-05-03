import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_createAssert_TupleRestAtomic = _test_assert(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input: any): TupleRestAtomic => {
        const $guard = (typia.createAssert as any).guard;
        const __is = (input: any): input is TupleRestAtomic => {
            return (
                Array.isArray(input) &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                Number.isFinite(input[1]) &&
                Array.isArray(input.slice(2)) &&
                input.slice(2).every((elem: any) => "string" === typeof elem)
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TupleRestAtomic => {
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "[boolean, number, Rest<string>]",
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
                    (Array.isArray(input.slice(2)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<string>",
                            value: input.slice(2),
                        })) &&
                    input.slice(2).every(
                        (elem: any, _index1: number) =>
                            "string" === typeof elem ||
                            $guard(true, {
                                path: _path + "[" + (2 + _index1) + "]",
                                expected: "string",
                                value: elem,
                            }),
                    )
                );
            })(input, "$input", true);
        return input;
    },
    TupleRestAtomic.SPOILERS,
);
