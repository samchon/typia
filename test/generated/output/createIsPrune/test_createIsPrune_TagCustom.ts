import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagCustom } from "../../../structures/TagCustom";

export const test_createIsPrune_TagCustom = _test_isPrune(
    "TagCustom",
    TagCustom.generate,
    (input: any): input is TagCustom => {
        const is = (input: any): input is TagCustom => {
            const $is_uuid = (typia.createIsPrune as any).is_uuid;
            const $is_custom = (typia.createIsPrune as any).is_custom;
            const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                true === $is_uuid(input.id) &&
                "string" === typeof input.dolloar &&
                $is_custom("dollar", "string", "", input.dolloar) &&
                "string" === typeof input.postfix &&
                $is_custom("postfix", "string", "abcd", input.postfix) &&
                "number" === typeof input.log &&
                Number.isFinite(input.log) &&
                $is_custom("powerOf", "number", "10", input.log);
            return "object" === typeof input && null !== input && $io0(input);
        };
        const prune = (input: TagCustom): void => {
            const $is_uuid = (typia.createIsPrune as any).is_uuid;
            const $is_custom = (typia.createIsPrune as any).is_custom;
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
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    TagCustom.SPOILERS,
);
