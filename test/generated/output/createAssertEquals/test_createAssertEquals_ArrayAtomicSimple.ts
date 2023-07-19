import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_assertEquals_ArrayAtomicSimple =
    _test_assertEquals<ArrayAtomicSimple>(ArrayAtomicSimple)(
        (input: any): ArrayAtomicSimple => {
            const __is = (
                input: any,
                _exceptionable: boolean = true,
            ): input is ArrayAtomicSimple => {
                return (
                    Array.isArray(input) &&
                    input.length === 3 &&
                    Array.isArray(input[0]) &&
                    input[0].every(
                        (elem: any, _index1: number) =>
                            "boolean" === typeof elem,
                    ) &&
                    Array.isArray(input[1]) &&
                    input[1].every(
                        (elem: any, _index2: number) =>
                            "number" === typeof elem && Number.isFinite(elem),
                    ) &&
                    Array.isArray(input[2]) &&
                    input[2].every(
                        (elem: any, _index3: number) =>
                            "string" === typeof elem,
                    )
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ArrayAtomicSimple => {
                    const $guard = (typia.createAssertEquals as any).guard;
                    return (
                        ((Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ArrayAtomicSimple",
                                value: input,
                            })) &&
                            (input.length === 3 ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "[Array<boolean>, Array<number>, Array<string>]",
                                    value: input,
                                })) &&
                            (((Array.isArray(input[0]) ||
                                $guard(true, {
                                    path: _path + "[0]",
                                    expected: "Array<boolean>",
                                    value: input[0],
                                })) &&
                                input[0].every(
                                    (elem: any, _index1: number) =>
                                        "boolean" === typeof elem ||
                                        $guard(true, {
                                            path:
                                                _path + "[0][" + _index1 + "]",
                                            expected: "boolean",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(true, {
                                    path: _path + "[0]",
                                    expected: "Array<boolean>",
                                    value: input[0],
                                })) &&
                            (((Array.isArray(input[1]) ||
                                $guard(true, {
                                    path: _path + "[1]",
                                    expected: "Array<number>",
                                    value: input[1],
                                })) &&
                                input[1].every(
                                    (elem: any, _index2: number) =>
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        $guard(true, {
                                            path:
                                                _path + "[1][" + _index2 + "]",
                                            expected: "number",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(true, {
                                    path: _path + "[1]",
                                    expected: "Array<number>",
                                    value: input[1],
                                })) &&
                            (((Array.isArray(input[2]) ||
                                $guard(true, {
                                    path: _path + "[2]",
                                    expected: "Array<string>",
                                    value: input[2],
                                })) &&
                                input[2].every(
                                    (elem: any, _index3: number) =>
                                        "string" === typeof elem ||
                                        $guard(true, {
                                            path:
                                                _path + "[2][" + _index3 + "]",
                                            expected: "string",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(true, {
                                    path: _path + "[2]",
                                    expected: "Array<string>",
                                    value: input[2],
                                }))) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ArrayAtomicSimple",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        },
    );
