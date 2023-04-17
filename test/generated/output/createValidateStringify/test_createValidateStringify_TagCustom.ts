import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { TagCustom } from "../../../structures/TagCustom";

export const test_createValidateStringify_TagCustom = _test_validateStringify(
    "TagCustom",
    TagCustom.generate,
    (input: TagCustom): typia.IValidation<string> => {
        const validate = (input: any): typia.IValidation<TagCustom> => {
            const __is = (input: any): input is TagCustom => {
                const $is_uuid = (typia.createValidateStringify as any).is_uuid;
                const $is_custom = (typia.createValidateStringify as any)
                    .is_custom;
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    $is_uuid(input.id) &&
                    "string" === typeof input.dollar &&
                    $is_custom("dollar", "string", "", input.dollar) &&
                    "string" === typeof input.postfix &&
                    $is_custom("postfix", "string", "abcd", input.postfix) &&
                    "number" === typeof input.log &&
                    Number.isFinite(input.log) &&
                    $is_custom("powerOf", "number", "10", input.log);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const errors = [] as any[];
            const $report = (typia.createValidateStringify as any).report(
                errors,
            );
            const $is_uuid = (typia.createValidateStringify as any).is_uuid;
            const $is_custom = (typia.createValidateStringify as any).is_custom;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagCustom => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("string" === typeof input.id &&
                                ($is_uuid(input.id) ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "string (@format uuid)",
                                        value: input.id,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "string",
                                    value: input.id,
                                }),
                            ("string" === typeof input.dollar &&
                                ($is_custom(
                                    "dollar",
                                    "string",
                                    "",
                                    input.dollar,
                                ) ||
                                    $report(_exceptionable, {
                                        path: _path + ".dollar",
                                        expected: "string (@dollar)",
                                        value: input.dollar,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".dollar",
                                    expected: "string",
                                    value: input.dollar,
                                }),
                            ("string" === typeof input.postfix &&
                                ($is_custom(
                                    "postfix",
                                    "string",
                                    "abcd",
                                    input.postfix,
                                ) ||
                                    $report(_exceptionable, {
                                        path: _path + ".postfix",
                                        expected: "string (@postfix abcd)",
                                        value: input.postfix,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".postfix",
                                    expected: "string",
                                    value: input.postfix,
                                }),
                            ("number" === typeof input.log &&
                                Number.isFinite(input.log) &&
                                ($is_custom(
                                    "powerOf",
                                    "number",
                                    "10",
                                    input.log,
                                ) ||
                                    $report(_exceptionable, {
                                        path: _path + ".log",
                                        expected: "number (@powerOf 10)",
                                        value: input.log,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".log",
                                    expected: "number",
                                    value: input.log,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Resolve<TagCustom>",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<TagCustom>",
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
        const stringify = (input: TagCustom): string => {
            const $string = (typia.createValidateStringify as any).string;
            const $number = (typia.createValidateStringify as any).number;
            const $is_uuid = (typia.createValidateStringify as any).is_uuid;
            const $is_custom = (typia.createValidateStringify as any).is_custom;
            const $so0 = (input: any): any =>
                `{"id":${'"' + input.id + '"'},"dollar":${$string(
                    input.dollar,
                )},"postfix":${$string(input.postfix)},"log":${$number(
                    input.log,
                )}}`;
            return $so0(input);
        };
        const output = validate(input) as any;
        if (output.success) output.data = stringify(input);
        return output;
    },
    TagCustom.SPOILERS,
);
