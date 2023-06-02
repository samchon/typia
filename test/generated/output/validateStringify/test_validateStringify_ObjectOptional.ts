import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_validateStringify_ObjectOptional = _test_validateStringify(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) =>
        ((input: ObjectOptional): typia.IValidation<string> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<ObjectOptional> => {
                const __is: any = (input: any): input is ObjectOptional => {
                    const $io0: any = (input: any): boolean =>
                        (undefined === input.id ||
                            "string" === typeof input.id) &&
                        (undefined === input.name ||
                            "string" === typeof input.name) &&
                        (undefined === input.email ||
                            "string" === typeof input.email) &&
                        (undefined === input.sequence ||
                            ("number" === typeof input.sequence &&
                                Number.isFinite(input.sequence)));
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input) &&
                        $io0(input)
                    );
                };
                const errors: any = [] as any[];
                const $report: any = (typia.validateStringify as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectOptional => {
                        const $vo0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                undefined === input.id ||
                                    "string" === typeof input.id ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "(string | undefined)",
                                        value: input.id,
                                    }),
                                undefined === input.name ||
                                    "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "(string | undefined)",
                                        value: input.name,
                                    }),
                                undefined === input.email ||
                                    "string" === typeof input.email ||
                                    $report(_exceptionable, {
                                        path: _path + ".email",
                                        expected: "(string | undefined)",
                                        value: input.email,
                                    }),
                                undefined === input.sequence ||
                                    ("number" === typeof input.sequence &&
                                        Number.isFinite(input.sequence)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".sequence",
                                        expected: "(number | undefined)",
                                        value: input.sequence,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input &&
                                null !== input &&
                                false === Array.isArray(input)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectOptional",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectOptional",
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
            const stringify: any = (input: ObjectOptional): string => {
                const $string: any = (typia.validateStringify as any).string;
                const $number: any = (typia.validateStringify as any).number;
                const $tail: any = (typia.validateStringify as any).tail;
                const $so0: any = (input: any): any =>
                    `{${$tail(
                        `${
                            undefined === input.id
                                ? ""
                                : `"id":${
                                      undefined !== input.id
                                          ? $string(input.id)
                                          : undefined
                                  },`
                        }${
                            undefined === input.name
                                ? ""
                                : `"name":${
                                      undefined !== input.name
                                          ? $string(input.name)
                                          : undefined
                                  },`
                        }${
                            undefined === input.email
                                ? ""
                                : `"email":${
                                      undefined !== input.email
                                          ? $string(input.email)
                                          : undefined
                                  },`
                        }${
                            undefined === input.sequence
                                ? ""
                                : `"sequence":${
                                      undefined !== input.sequence
                                          ? $number(input.sequence)
                                          : undefined
                                  }`
                        }`,
                    )}}`;
                return $so0(input);
            };
            const output: any = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    ObjectOptional.SPOILERS,
);
