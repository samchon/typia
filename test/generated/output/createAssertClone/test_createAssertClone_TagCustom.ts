import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { TagCustom } from "../../../structures/TagCustom";

export const test_createAssertClone_TagCustom = _test_assertClone(
    "TagCustom",
    TagCustom.generate,
    (input: any): typia.Primitive<TagCustom> => {
        const assert = (input: any): TagCustom => {
            const $guard = (typia.createAssertClone as any).guard;
            const $is_uuid = (typia.createAssertClone as any).is_uuid;
            const $is_custom = (typia.createAssertClone as any).is_custom;
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
        const clone = (input: TagCustom): typia.Primitive<TagCustom> => {
            const $is_uuid = (typia.createAssertClone as any).is_uuid;
            const $is_custom = (typia.createAssertClone as any).is_custom;
            const $co0 = (input: any): any => ({
                id: input.id as any,
                dolloar: input.dolloar as any,
                postfix: input.postfix as any,
                log: input.log as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    TagCustom.SPOILERS,
);
