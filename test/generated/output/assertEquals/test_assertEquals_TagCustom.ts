import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagCustom } from "../../../structures/TagCustom";

export const test_assertEquals_TagCustom = _test_assertEquals(
    "TagCustom",
    TagCustom.generate,
    (input) =>
        ((input: any): TagCustom => {
            const $guard = (typia.assertEquals as any).guard;
            const $is_uuid = (typia.assertEquals as any).is_uuid;
            const $is_custom = (typia.assertEquals as any).is_custom;
            const $join = (typia.assertEquals as any).join;
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
                        })) &&
                    (4 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (
                                ["id", "dolloar", "postfix", "log"].some(
                                    (prop) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
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
        })(input),
);
