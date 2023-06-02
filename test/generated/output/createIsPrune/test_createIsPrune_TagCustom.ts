import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagCustom } from "../../../structures/TagCustom";

export const test_createIsPrune_TagCustom = _test_isPrune(
    "TagCustom",
    TagCustom.generate,
    (input: any): input is TagCustom => {
        const is: any = (input: any): input is TagCustom => {
            const $is_uuid: any = (typia.createIsPrune as any).is_uuid;
            const $is_custom: any = (typia.createIsPrune as any).is_custom;
            const $io0: any = (input: any): boolean =>
                "string" === typeof input.id &&
                $is_uuid(input.id) &&
                "string" === typeof input.dollar &&
                $is_custom("dollar", "string", "", input.dollar) &&
                "string" === typeof input.postfix &&
                $is_custom("postfix", "string", "abcd", input.postfix) &&
                "number" === typeof input.log &&
                Number.isFinite(input.log) &&
                $is_custom("powerOf", "number", "10", input.log);
            return "object" === typeof input && null !== input && $io0(input);
        };
        const prune: any = (input: TagCustom): void => {
            const $is_uuid: any = (typia.createIsPrune as any).is_uuid;
            const $is_custom: any = (typia.createIsPrune as any).is_custom;
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
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
