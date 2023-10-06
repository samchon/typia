import typia from "../../../../src";
import { _test_http_validateHeaders } from "../../../internal/_test_http_validateHeaders";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_http_createValidateHeaders_ObjectHttpAtomic =
    _test_http_validateHeaders("ObjectHttpAtomic")<ObjectHttpAtomic>(
        ObjectHttpAtomic,
    )(
        (
            input: Record<string, string | string[] | undefined>,
        ): typia.IValidation<typia.Resolved<ObjectHttpAtomic>> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectHttpAtomic> => {
                const errors = [] as any[];
                const __is = (input: any): input is ObjectHttpAtomic => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "boolean" === typeof (input as any).boolean &&
                        "bigint" === typeof (input as any).bigint &&
                        "number" === typeof (input as any).number &&
                        Number.isFinite((input as any).number) &&
                        "string" === typeof (input as any).string
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.http.createValidateHeaders as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectHttpAtomic => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "boolean" === typeof input.boolean ||
                                    $report(_exceptionable, {
                                        path: _path + ".boolean",
                                        expected: "boolean",
                                        value: input.boolean,
                                    }),
                                "bigint" === typeof input.bigint ||
                                    $report(_exceptionable, {
                                        path: _path + ".bigint",
                                        expected: "bigint",
                                        value: input.bigint,
                                    }),
                                ("number" === typeof input.number &&
                                    Number.isFinite(input.number)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".number",
                                        expected: "number",
                                        value: input.number,
                                    }),
                                "string" === typeof input.string ||
                                    $report(_exceptionable, {
                                        path: _path + ".string",
                                        expected: "string",
                                        value: input.string,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectHttpAtomic",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectHttpAtomic",
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
            const headers = (
                input: Record<string, string | string[] | undefined>,
            ): typia.Resolved<ObjectHttpAtomic> => {
                const $boolean = (typia.http.createValidateHeaders as any)
                    .boolean;
                const $bigint = (typia.http.createValidateHeaders as any)
                    .bigint;
                const $number = (typia.http.createValidateHeaders as any)
                    .number;
                const output = {
                    boolean: $boolean(input.boolean),
                    bigint: $bigint(input.bigint),
                    number: $number(input.number),
                    string: input.string,
                };
                return output as any;
            };
            const output = headers(input);
            return validate(output) as any;
        },
    );
