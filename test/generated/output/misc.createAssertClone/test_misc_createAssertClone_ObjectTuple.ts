import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_misc_assertClone_ObjectTuple =
    _test_misc_assertClone<ObjectTuple>(ObjectTuple)(
        (input: any): typia.Primitive<ObjectTuple> => {
            const assert = (input: any): ObjectTuple => {
                const __is = (input: any): input is ObjectTuple => {
                    const $io0 = (input: any): boolean =>
                        "string" === typeof input.id &&
                        "string" === typeof input.code &&
                        "string" === typeof input.name;
                    const $io1 = (input: any): boolean =>
                        "string" === typeof input.id &&
                        "string" === typeof input.mobile &&
                        "string" === typeof input.name;
                    return (
                        Array.isArray(input) &&
                        input.length === 2 &&
                        "object" === typeof input[0] &&
                        null !== input[0] &&
                        $io0(input[0]) &&
                        "object" === typeof input[1] &&
                        null !== input[1] &&
                        $io1(input[1])
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectTuple => {
                        const $guard = (typia.misc.createAssertClone as any)
                            .guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("string" === typeof input.id ||
                                $guard(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "string",
                                    value: input.id,
                                })) &&
                            ("string" === typeof input.code ||
                                $guard(_exceptionable, {
                                    path: _path + ".code",
                                    expected: "string",
                                    value: input.code,
                                })) &&
                            ("string" === typeof input.name ||
                                $guard(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }));
                        const $ao1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("string" === typeof input.id ||
                                $guard(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "string",
                                    value: input.id,
                                })) &&
                            ("string" === typeof input.mobile ||
                                $guard(_exceptionable, {
                                    path: _path + ".mobile",
                                    expected: "string",
                                    value: input.mobile,
                                })) &&
                            ("string" === typeof input.name ||
                                $guard(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }));
                        return (
                            ((Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectTuple",
                                    value: input,
                                })) &&
                                (input.length === 2 ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected:
                                            "[ObjectTuple.ISection, ObjectTuple.ICitizen]",
                                        value: input,
                                    })) &&
                                (((("object" === typeof input[0] &&
                                    null !== input[0]) ||
                                    $guard(true, {
                                        path: _path + "[0]",
                                        expected: "ObjectTuple.ISection",
                                        value: input[0],
                                    })) &&
                                    $ao0(input[0], _path + "[0]", true)) ||
                                    $guard(true, {
                                        path: _path + "[0]",
                                        expected: "ObjectTuple.ISection",
                                        value: input[0],
                                    })) &&
                                (((("object" === typeof input[1] &&
                                    null !== input[1]) ||
                                    $guard(true, {
                                        path: _path + "[1]",
                                        expected: "ObjectTuple.ICitizen",
                                        value: input[1],
                                    })) &&
                                    $ao1(input[1], _path + "[1]", true)) ||
                                    $guard(true, {
                                        path: _path + "[1]",
                                        expected: "ObjectTuple.ICitizen",
                                        value: input[1],
                                    }))) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectTuple",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone = (
                input: ObjectTuple,
            ): typia.Primitive<ObjectTuple> => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.code &&
                    "string" === typeof input.name;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.mobile &&
                    "string" === typeof input.name;
                const $co0 = (input: any): any => ({
                    id: input.id as any,
                    code: input.code as any,
                    name: input.name as any,
                });
                const $co1 = (input: any): any => ({
                    id: input.id as any,
                    mobile: input.mobile as any,
                    name: input.name as any,
                });
                return Array.isArray(input) &&
                    input.length === 2 &&
                    "object" === typeof input[0] &&
                    null !== input[0] &&
                    $io0(input[0]) &&
                    "object" === typeof input[1] &&
                    null !== input[1] &&
                    $io1(input[1])
                    ? ([
                          "object" === typeof input[0] && null !== input[0]
                              ? $co0(input[0])
                              : (input[0] as any),
                          "object" === typeof input[1] && null !== input[1]
                              ? $co1(input[1])
                              : (input[1] as any),
                      ] as any)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        },
    );
