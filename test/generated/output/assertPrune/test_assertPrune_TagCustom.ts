import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { TagCustom } from "../../../structures/TagCustom";

export const test_assertPrune_TagCustom = _test_assertPrune(
    "TagCustom",
    TagCustom.generate,
    (input) =>
        ((input: any): TagCustom => {
            const assert = (input: any): TagCustom => {
                const $guard = (typia.assertPrune as any).guard;
                const $is_uuid = (typia.assertPrune as any).is_uuid;
                const $is_custom = (typia.assertPrune as any).is_custom;
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
                            $is_custom(
                                "dollar",
                                "string",
                                "",
                                input.dolloar,
                            )) ||
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
            const prune = (input: TagCustom): void => {
                const $is_uuid = (typia.assertPrune as any).is_uuid;
                const $is_custom = (typia.assertPrune as any).is_custom;
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "id" === key ||
                            "dolloar" === key ||
                            "postfix" === key ||
                            "log" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            assert(input);
            prune(input);
            return input;
        })(input),
    TagCustom.SPOILERS,
);
