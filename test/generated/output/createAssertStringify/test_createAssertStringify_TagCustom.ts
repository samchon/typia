import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { TagCustom } from "../../../structures/TagCustom";

export const test_createAssertStringify_TagCustom = _test_assertStringify(
    "TagCustom",
    TagCustom.generate,
    (input: any): string => {
        const assert = (input: any): TagCustom => {
            const $guard = (typia.createAssertStringify as any).guard;
            const $is_uuid = (typia.createAssertStringify as any).is_uuid;
            const $is_custom = (typia.createAssertStringify as any).is_custom;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagCustom => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("string" === typeof input.id &&
                        true === $is_uuid(input.id)) ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "string",
                            value: input.id,
                        })) &&
                    (("string" === typeof input.dolloar &&
                        $is_custom("dollar", "string", "", input.dolloar)) ||
                        $guard(_exceptionable, {
                            path: _path + ".dolloar",
                            expected: "string",
                            value: input.dolloar,
                        })) &&
                    (("string" === typeof input.postfix &&
                        $is_custom(
                            "postfix",
                            "string",
                            "abcd",
                            input.postfix,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".postfix",
                            expected: "string",
                            value: input.postfix,
                        })) &&
                    (("number" === typeof input.log &&
                        Number.isFinite(input.log) &&
                        $is_custom("powerOf", "number", "10", input.log)) ||
                        $guard(_exceptionable, {
                            path: _path + ".log",
                            expected: "number",
                            value: input.log,
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<TagCustom>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        };
        const stringify = (input: TagCustom): string => {
            const $string = (typia.createAssertStringify as any).string;
            const $number = (typia.createAssertStringify as any).number;
            const $is_uuid = (typia.createAssertStringify as any).is_uuid;
            const $is_custom = (typia.createAssertStringify as any).is_custom;
            const $so0 = (input: any): any =>
                `{"id":${'"' + input.id + '"'},"dolloar":${$string(
                    input.dolloar,
                )},"postfix":${$string(input.postfix)},"log":${$number(
                    input.log,
                )}}`;
            return $so0(input);
        };
        return stringify(assert(input));
    },
    TagCustom.SPOILERS,
);
