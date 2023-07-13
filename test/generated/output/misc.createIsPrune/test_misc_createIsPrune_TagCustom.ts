import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TagCustom } from "../../../structures/TagCustom";

export const test_misc_isPrune_TagCustom = _test_misc_isPrune(
    "TagCustom",
    TagCustom.generate,
    (input: any): input is TagCustom => {
        const is = (input: any): input is TagCustom => {
            const $is_uuid = (typia.misc.createIsPrune as any).is_uuid;
            const $is_custom = (typia.misc.createIsPrune as any).is_custom;
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).id &&
                $is_uuid((input as any).id) &&
                "string" === typeof (input as any).dollar &&
                $is_custom("dollar", "string", "", (input as any).dollar) &&
                "string" === typeof (input as any).postfix &&
                $is_custom(
                    "postfix",
                    "string",
                    "abcd",
                    (input as any).postfix,
                ) &&
                "number" === typeof (input as any).log &&
                Number.isFinite((input as any).log) &&
                $is_custom("powerOf", "number", "10", (input as any).log)
            );
        };
        const prune = (input: TagCustom): void => {
            const $is_uuid = (typia.misc.createIsPrune as any).is_uuid;
            const $is_custom = (typia.misc.createIsPrune as any).is_custom;
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "id" === key ||
                        "dollar" === key ||
                        "postfix" === key ||
                        "log" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    TagCustom.SPOILERS,
);
