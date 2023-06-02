import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_assertClone_ObjectIntersection = _test_assertClone(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<
            ObjectIntersection.IEmail & ObjectIntersection.IName
        > => {
            const assert: any = (
                input: any,
            ): ObjectIntersection.IEmail & ObjectIntersection.IName => {
                const __is: any = (
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
                const $guard: any = (typia.assertClone as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectIntersection.IEmail &
                        ObjectIntersection.IName => {
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
            const clone: any = (
                input: ObjectIntersection.IEmail & ObjectIntersection.IName,
            ): typia.Primitive<
                ObjectIntersection.IEmail & ObjectIntersection.IName
            > => {
                const $co0: any = (input: any): any => ({
                    email: input.email as any,
                    name: input.name as any,
                    vulnerable: input.vulnerable as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            assert(input);
            const output: any = clone(input);
            return output;
        })(input),
    ObjectIntersection.SPOILERS,
);
