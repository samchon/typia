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
            const assert = (input: any): ObjectIntersection => {
                const $guard = (typia.assertClone as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectIntersection => {
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
    ObjectIntersection.SPOILERS,
);
