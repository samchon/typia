import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TagArrayUnion } from "../../../structures/TagArrayUnion";

export const test_misc_prune_TagArrayUnion = _test_misc_prune<TagArrayUnion>(
    TagArrayUnion,
)((input) =>
    ((input: TagArrayUnion): void => {
        const $is_uuid = (typia.misc.prune as any).is_uuid;
        const $pp0 = (input: any) =>
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $po0(elem);
            });
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "items" === key ||
                    "minItems" === key ||
                    "maxItems" === key ||
                    "both" === key
                )
                    continue;
                delete input[key];
            }
        };
        if (Array.isArray(input)) $pp0(input);
    })(input),
);
