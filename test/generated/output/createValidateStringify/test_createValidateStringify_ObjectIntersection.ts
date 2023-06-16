import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_createValidateStringify_ObjectIntersection =
    _test_validateStringify(
        "ObjectIntersection",
        ObjectIntersection.generate,
        (input: ObjectIntersection): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectIntersection> => {
                const errors = [] as any[];
                const __is = (input: any): input is ObjectIntersection => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof (input as any).email &&
                        "string" === typeof (input as any).name &&
                        "boolean" === typeof (input as any).vulnerable
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.createValidateStringify as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectIntersection => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "string" === typeof input.email ||
                                    $report(_exceptionable, {
                                        path: _path + ".email",
                                        expected: "string",
                                        value: input.email,
                                    }),
                                "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    }),
                                "boolean" === typeof input.vulnerable ||
                                    $report(_exceptionable, {
                                        path: _path + ".vulnerable",
                                        expected: "boolean",
                                        value: input.vulnerable,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectIntersection",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectIntersection",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const stringify = (input: ObjectIntersection): string => {
                const $string = (typia.createValidateStringify as any).string;
                return `{"email":${$string(
                    (input as any).email,
                )},"name":${$string((input as any).name)},"vulnerable":${
                    (input as any).vulnerable
                }}`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
        ObjectIntersection.SPOILERS,
    );
