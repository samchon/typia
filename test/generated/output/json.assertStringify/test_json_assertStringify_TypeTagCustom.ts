import typia from "../../../../src";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_json_assertStringify_TypeTagCustom =
    _test_json_assertStringify("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
        (input) =>
            ((input: any): string => {
                const assert = (input: any): TypeTagCustom => {
                    const __is = (input: any): input is TypeTagCustom => {
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            "string" === typeof (input as any).id &&
                            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                                (input as any).id,
                            ) &&
                            "string" === typeof (input as any).dollar &&
                            (input as any).dollar[0] === "$" &&
                            !isNaN(
                                Number(
                                    (input as any).dollar
                                        .substring(1)
                                        .split(",")
                                        .join(""),
                                ),
                            ) &&
                            "string" === typeof (input as any).postfix &&
                            (input as any).postfix.endsWith("abcd")
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is TypeTagCustom => {
                            const $guard = (typia.json.assertStringify as any)
                                .guard;
                            const $ao0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (("string" === typeof input.id &&
                                    (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                                        input.id,
                                    ) ||
                                        $guard(_exceptionable, {
                                            path: _path + ".id",
                                            expected: 'string & Format<"uuid">',
                                            value: input.id,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".id",
                                        expected: '(string & Format<"uuid">)',
                                        value: input.id,
                                    })) &&
                                (("string" === typeof input.dollar &&
                                    ((input.dollar[0] === "$" &&
                                        !isNaN(
                                            Number(
                                                input.dollar
                                                    .substring(1)
                                                    .split(",")
                                                    .join(""),
                                            ),
                                        )) ||
                                        $guard(_exceptionable, {
                                            path: _path + ".dollar",
                                            expected: "string & Dolloar",
                                            value: input.dollar,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".dollar",
                                        expected: "(string & Dolloar)",
                                        value: input.dollar,
                                    })) &&
                                (("string" === typeof input.postfix &&
                                    (input.postfix.endsWith("abcd") ||
                                        $guard(_exceptionable, {
                                            path: _path + ".postfix",
                                            expected:
                                                'string & Postfix<"abcd">',
                                            value: input.postfix,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".postfix",
                                        expected: '(string & Postfix<"abcd">)',
                                        value: input.postfix,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "TypeTagCustom",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "TypeTagCustom",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const stringify = (input: TypeTagCustom): string => {
                    const $string = (typia.json.assertStringify as any).string;
                    return `{"id":${$string(
                        (input as any).id,
                    )},"dollar":${$string(
                        (input as any).dollar,
                    )},"postfix":${$string((input as any).postfix)}}`;
                };
                return stringify(assert(input));
            })(input),
    );
