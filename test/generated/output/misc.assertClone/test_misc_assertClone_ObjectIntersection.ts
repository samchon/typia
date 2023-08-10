import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_misc_assertClone_ObjectIntersection =
    _test_misc_assertClone<ObjectIntersection>(ObjectIntersection)((input) =>
        ((input: any): typia.Primitive<ObjectIntersection> => {
            const assert = (input: any): ObjectIntersection => {
                const __is = (input: any): input is ObjectIntersection => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof (input as any).email &&
                        "string" === typeof (input as any).name &&
                        "boolean" === typeof (input as any).vulnerable
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectIntersection => {
                        const $guard = (typia.misc.assertClone as any).guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("string" === typeof input.email ||
                                $guard(_exceptionable, {
                                    path: _path + ".email",
                                    expected: "string",
                                    value: input.email,
                                })) &&
                            ("string" === typeof input.name ||
                                $guard(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                })) &&
                            ("boolean" === typeof input.vulnerable ||
                                $guard(_exceptionable, {
                                    path: _path + ".vulnerable",
                                    expected: "boolean",
                                    value: input.vulnerable,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectIntersection",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectIntersection",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone = (
                input: ObjectIntersection,
            ): typia.Primitive<ObjectIntersection> => {
                const $co0 = (input: any): any => ({
                    email: input.email as any,
                    name: input.name as any,
                    vulnerable: input.vulnerable as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    );
