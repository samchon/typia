import typia from "../../../../src";
import { _test_misc_validateClone } from "../../../internal/_test_misc_validateClone";
import { TagCustom } from "../../../structures/TagCustom";

export const test_misc_validateClone_TagCustom = _test_misc_validateClone(
    "TagCustom",
    TagCustom.generate,
    (input) =>
        ((input: any): typia.IValidation<typia.Primitive<TagCustom>> => {
            const validate = (input: any): typia.IValidation<TagCustom> => {
                const errors = [] as any[];
                const __is = (input: any): input is TagCustom => {
                    const $is_uuid = (typia.misc.validateClone as any).is_uuid;
                    const $is_custom = (typia.misc.validateClone as any)
                        .is_custom;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof (input as any).id &&
                        $is_uuid((input as any).id) &&
                        "string" === typeof (input as any).dollar &&
                        $is_custom(
                            "dollar",
                            "string",
                            "",
                            (input as any).dollar,
                        ) &&
                        "string" === typeof (input as any).postfix &&
                        $is_custom(
                            "postfix",
                            "string",
                            "abcd",
                            (input as any).postfix,
                        ) &&
                        "number" === typeof (input as any).log &&
                        Number.isFinite((input as any).log) &&
                        $is_custom(
                            "powerOf",
                            "number",
                            "10",
                            (input as any).log,
                        )
                    );
                };
                if (false === __is(input)) {
                    const $report = (typia.misc.validateClone as any).report(
                        errors,
                    );
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagCustom => {
                        const $is_uuid = (typia.misc.validateClone as any)
                            .is_uuid;
                        const $is_custom = (typia.misc.validateClone as any)
                            .is_custom;
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
                                    expected: "TagCustom",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TagCustom",
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
            const clone = (input: TagCustom): typia.Primitive<TagCustom> => {
                const $is_uuid = (typia.misc.validateClone as any).is_uuid;
                const $is_custom = (typia.misc.validateClone as any).is_custom;
                const $co0 = (input: any): any => ({
                    id: input.id as any,
                    dollar: input.dollar as any,
                    postfix: input.postfix as any,
                    log: input.log as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    TagCustom.SPOILERS,
);
