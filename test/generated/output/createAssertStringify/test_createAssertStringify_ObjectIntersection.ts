import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_createAssertStringify_ObjectIntersection =
    _test_assertStringify(
        "ObjectIntersection",
        ObjectIntersection.generate,
        (input: any): string => {
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
                        const $guard = (typia.createAssertStringify as any)
                            .guard;
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
            const stringify = (input: ObjectIntersection): string => {
                const $string = (typia.createAssertStringify as any).string;
                return `{"email":${$string(
                    (input as any).email,
                )},"name":${$string((input as any).name)},"vulnerable":${
                    (input as any).vulnerable
                }}`;
            };
            return stringify(assert(input));
        },
        ObjectIntersection.SPOILERS,
    );
