import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_createAssertStringify_ObjectLiteralType =
    _test_assertStringify(
        "ObjectLiteralType",
        ObjectLiteralType.generate,
        (input: any): string => {
            const assert: any = (input: any): ObjectLiteralType => {
                const __is: any = (input: any): input is ObjectLiteralType => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof input.id &&
                        "string" === typeof input.name &&
                        "number" === typeof input.age &&
                        Number.isFinite(input.age)
                    );
                };
                const $guard: any = (typia.createAssertStringify as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectLiteralType => {
                        const $ao0: any = (
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
            const stringify: any = (input: ObjectLiteralType): string => {
                const $string: any = (typia.createAssertStringify as any)
                    .string;
                const $number: any = (typia.createAssertStringify as any)
                    .number;
                return `{"id":${$string(input.id)},"name":${$string(
                    input.name,
                )},"age":${$number(input.age)}}`;
            };
            return stringify(assert(input));
        },
        ObjectLiteralType.SPOILERS,
    );
