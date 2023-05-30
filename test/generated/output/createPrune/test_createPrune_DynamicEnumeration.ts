import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
export const test_createPrune_DynamicEnumeration = _test_prune("DynamicEnumeration", DynamicEnumeration.generate, (input: DynamicEnumeration): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("ar" === key || "zh-Hans" === key || "zh-Hant" === key || "en" === key || "fr" === key || "de" === key || "ja" === key || "ko" === key || "pt" === key || "ru" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
});
