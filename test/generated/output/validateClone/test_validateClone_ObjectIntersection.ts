import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_validateClone_ObjectIntersection = _test_validateClone(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<
            typia.Primitive<
                ObjectIntersection.IEmail & ObjectIntersection.IName
            >
        > => {
            const validate: any = (
                input: any,
            ): typia.IValidation<
                ObjectIntersection.IEmail & ObjectIntersection.IName
            > => {
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
                const errors: any = [] as any[];
                const $report: any = (typia.validateClone as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectIntersection.IEmail &
                        ObjectIntersection.IName => {
                        const $vo0: any = (
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
                const success: any = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
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
            const output: any = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    ObjectIntersection.SPOILERS,
);
