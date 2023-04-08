import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_validateStringify_ObjectIntersection =
    _test_validateStringify(
        "ObjectIntersection",
        ObjectIntersection.generate,
        (input) =>
            ((
                input: ObjectIntersection.IEmail & ObjectIntersection.IName,
            ): typia.IValidation<string> => {
                const validate = (
                    input: any,
                ): typia.IValidation<
                    ObjectIntersection.IEmail & ObjectIntersection.IName
                > => {
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
                    const errors = [] as any[];
                    const $report = (typia.validateStringify as any).report(
                        errors,
                    );
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ObjectIntersection.IEmail &
                            ObjectIntersection.IName => {
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
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "Resolve<ObjectIntersection>",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "Resolve<ObjectIntersection>",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    const success = 0 === errors.length;
                    return {
                        success,
                        errors,
                        data: success ? input : undefined,
                    } as any;
                };
                const stringify = (
                    input: ObjectIntersection.IEmail & ObjectIntersection.IName,
                ): string => {
                    const $string = (typia.validateStringify as any).string;
                    return `{"email":${$string(input.email)},"name":${$string(
                        input.name,
                    )},"vulnerable":${input.vulnerable}}`;
                };
                const output = validate(input) as any;
                if (output.success) output.data = stringify(input);
                return output;
            })(input),
        ObjectIntersection.SPOILERS,
    );
