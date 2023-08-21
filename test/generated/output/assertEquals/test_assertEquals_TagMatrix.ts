import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_assertEquals_TagMatrix = _test_assertEquals(
    "TagMatrix",
)<TagMatrix>(TagMatrix)((input) =>
    ((input: any): TagMatrix => {
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is TagMatrix => {
            const $is_uuid = (typia.assertEquals as any).is_uuid;
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                Array.isArray(input.matrix) &&
                3 === input.matrix.length &&
                input.matrix.every(
                    (elem: any, _index1: number) =>
                        Array.isArray(elem) &&
                        3 === elem.length &&
                        elem.every(
                            (elem: any, _index2: number) =>
                                "string" === typeof elem && $is_uuid(elem),
                        ),
                ) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["matrix"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagMatrix => {
                const $guard = (typia.assertEquals as any).guard;
                const $is_uuid = (typia.assertEquals as any).is_uuid;
                const $join = (typia.assertEquals as any).join;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((((Array.isArray(input.matrix) &&
                        (3 === input.matrix.length ||
                            $guard(_exceptionable, {
                                path: _path + ".matrix",
                                expected: "Array.length (@items 3)",
                                value: input.matrix,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".matrix",
                            expected: "Array<Array<string>>",
                            value: input.matrix,
                        })) &&
                        input.matrix.every(
                            (elem: any, _index1: number) =>
                                (((Array.isArray(elem) &&
                                    (3 === elem.length ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".matrix[" +
                                                _index1 +
                                                "]",
                                            expected: "Array.length (@items 3)",
                                            value: elem,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".matrix[" + _index1 + "]",
                                        expected: "Array<string>",
                                        value: elem,
                                    })) &&
                                    elem.every(
                                        (elem: any, _index2: number) =>
                                            ("string" === typeof elem &&
                                                ($is_uuid(elem) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".matrix[" +
                                                            _index1 +
                                                            "][" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "string (@format uuid)",
                                                        value: elem,
                                                    }))) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".matrix[" +
                                                    _index1 +
                                                    "][" +
                                                    _index2 +
                                                    "]",
                                                expected: "string",
                                                value: elem,
                                            }),
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".matrix[" + _index1 + "]",
                                    expected: "Array<string>",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".matrix",
                            expected: "Array<Array<string>>",
                            value: input.matrix,
                        })) &&
                    (1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (["matrix"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagMatrix",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagMatrix",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    })(input),
);
