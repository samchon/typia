import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_assertEquals_TupleRestObject = _test_assertEquals(
    "TupleRestObject",
    TupleRestObject.generate,
    (input: any): TupleRestObject => {
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is TupleRestObject => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.value &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["value"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem, true),
                    )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TupleRestObject => {
                const $guard = (typia.createAssertEquals as any).guard;
                const $join = (typia.createAssertEquals as any).join;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.value ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "string",
                            value: input.value,
                        })) &&
                    (1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (["value"].some((prop: any) => key === prop))
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
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TupleRestObject",
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
                                expected: "...TupleRestObject.IObject",
                                value: input.slice(2),
                            })) &&
                            input.slice(2).every(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path:
                                                _path +
                                                "[" +
                                                (2 + _index1) +
                                                "]",
                                            expected: "TupleRestObject.IObject",
                                            value: elem,
                                        })) &&
                                        $ao0(
                                            elem,
                                            _path + "[" + (2 + _index1) + "]",
                                            true,
                                        )) ||
                                    $guard(true, {
                                        path: _path + "[" + (2 + _index1) + "]",
                                        expected: "TupleRestObject.IObject",
                                        value: elem,
                                    }),
                            )) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "...TupleRestObject.IObject",
                                value: input.slice(2),
                            }))) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TupleRestObject",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
);
