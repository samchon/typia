import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_assertStringify_ObjectIntersection = _test_assertStringify(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) =>
        ((input: any): string => {
            const assert = (
                input: any,
            ): ObjectIntersection.IEmail & ObjectIntersection.IName => {
                const $guard = (typia.assertStringify as any).guard;
                const __is = (
                    input: any,
                ): input is ObjectIntersection.IEmail &
                    ObjectIntersection.IName => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof input.email &&
                        "string" === typeof input.name &&
                        "boolean" === typeof input.vulnerable
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectIntersection.IEmail &
                        ObjectIntersection.IName => {
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
                            (("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "Resolve<ObjectIntersection>",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify = (
                input: ObjectIntersection.IEmail & ObjectIntersection.IName,
            ): string => {
                const $string = (typia.assertStringify as any).string;
                return `{"email":${$string(input.email)},"name":${$string(
                    input.name,
                )},"vulnerable":${input.vulnerable}}`;
            };
            return stringify(assert(input));
        })(input),
    ObjectIntersection.SPOILERS,
);
