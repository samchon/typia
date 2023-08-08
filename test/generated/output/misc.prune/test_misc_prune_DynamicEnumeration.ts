import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_misc_prune_DynamicEnumeration = _test_misc_prune(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) =>
        ((input: {
            ar?: string | undefined;
            "zh-Hans"?: string | undefined;
            "zh-Hant"?: string | undefined;
            en?: string | undefined;
            fr?: string | undefined;
            de?: string | undefined;
            ja?: string | undefined;
            ko?: string | undefined;
            pt?: string | undefined;
            ru?: string | undefined;
        }): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "ar" === key ||
                        "zh-Hans" === key ||
                        "zh-Hant" === key ||
                        "en" === key ||
                        "fr" === key ||
                        "de" === key ||
                        "ja" === key ||
                        "ko" === key ||
                        "pt" === key ||
                        "ru" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        })(input),
);
