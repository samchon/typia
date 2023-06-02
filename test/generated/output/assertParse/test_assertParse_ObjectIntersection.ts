import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_assertParse_ObjectIntersection = _test_assertParse(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) =>
        ((input: string): typia.Primitive<ObjectIntersection> => {
            const assert: any = (input: any): ObjectIntersection => {
                const __is: any = (input: any): input is ObjectIntersection => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof input.email &&
                        "string" === typeof input.name &&
                        "boolean" === typeof input.vulnerable
                    );
                };
                const $guard: any = (typia.assertParse as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectIntersection => {
                        const $ao0: any = (
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
                                    expected: "ObjectIntersection",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            input = JSON.parse(input);
            return assert(input) as any;
        })(input),
    ObjectIntersection.SPOILERS,
);
