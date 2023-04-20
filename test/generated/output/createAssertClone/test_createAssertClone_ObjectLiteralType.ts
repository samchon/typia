import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_createAssertClone_ObjectLiteralType = _test_assertClone(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input: any): typia.Primitive<ObjectLiteralType> => {
        const assert = (input: any): ObjectLiteralType => {
            const $guard = (typia.createAssertClone as any).guard;
            const __is = (input: any): input is ObjectLiteralType => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    Number.isFinite(input.age)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectLiteralType => {
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
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        (("number" === typeof input.age &&
                            Number.isFinite(input.age)) ||
                            $guard(_exceptionable, {
                                path: _path + ".age",
                                expected: "number",
                                value: input.age,
                            }));
                    return (
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "__object",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
            return input;
        };
        const clone = (
            input: ObjectLiteralType,
        ): typia.Primitive<ObjectLiteralType> => {
            const $co0 = (input: any): any => ({
                id: input.id as any,
                name: input.name as any,
                age: input.age as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    ObjectLiteralType.SPOILERS,
);
