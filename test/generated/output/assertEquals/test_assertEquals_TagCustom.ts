import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagCustom } from "../../../structures/TagCustom";

export const test_assertEquals_TagCustom = _test_assertEquals(
    "TagCustom",
)<TagCustom>(TagCustom)((input) =>
    ((input: any): TagCustom => {
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is TagCustom => {
            const $is_uuid = (typia.assertEquals as any).is_uuid;
            const $is_custom = (typia.assertEquals as any).is_custom;
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.id &&
                $is_uuid(input.id) &&
                "string" === typeof input.dollar &&
                $is_custom("dollar", "string", "", input.dollar) &&
                "string" === typeof input.postfix &&
                $is_custom("postfix", "string", "abcd", input.postfix) &&
                "number" === typeof input.log &&
                Number.isFinite(input.log) &&
                $is_custom("powerOf", "number", "10", input.log) &&
                (4 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["id", "dollar", "postfix", "log"].some(
                                (prop: any) => key === prop,
                            )
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagCustom => {
                const $guard = (typia.assertEquals as any).guard;
                const $is_uuid = (typia.assertEquals as any).is_uuid;
                const $is_custom = (typia.assertEquals as any).is_custom;
                const $join = (typia.assertEquals as any).join;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("string" === typeof input.id &&
                        ($is_uuid(input.id) ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "string (@format uuid)",
                                value: input.id,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "string",
                            value: input.id,
                        })) &&
                    (("string" === typeof input.dollar &&
                        ($is_custom("dollar", "string", "", input.dollar) ||
                            $guard(_exceptionable, {
                                path: _path + ".dollar",
                                expected: "string (@dollar)",
                                value: input.dollar,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".dollar",
                            expected: "string",
                            value: input.dollar,
                        })) &&
                    (("string" === typeof input.postfix &&
                        ($is_custom(
                            "postfix",
                            "string",
                            "abcd",
                            input.postfix,
                        ) ||
                            $guard(_exceptionable, {
                                path: _path + ".postfix",
                                expected: "string (@postfix abcd)",
                                value: input.postfix,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".postfix",
                            expected: "string",
                            value: input.postfix,
                        })) &&
                    (("number" === typeof input.log &&
                        Number.isFinite(input.log) &&
                        ($is_custom("powerOf", "number", "10", input.log) ||
                            $guard(_exceptionable, {
                                path: _path + ".log",
                                expected: "number (@powerOf 10)",
                                value: input.log,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".log",
                            expected: "number",
                            value: input.log,
                        })) &&
                    (4 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["id", "dollar", "postfix", "log"].some(
                                    (prop: any) => key === prop,
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
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagCustom",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagCustom",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    })(input),
);
