import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_isPrune_DynamicEnumeration = _test_isPrune("DynamicEnumeration", DynamicEnumeration.generate, (input) => ((input: any): input is DynamicEnumeration => { const is = (input: any): input is DynamicEnumeration => {
    const $io0 = (input: any) => "string" === typeof input.ar && "string" === typeof input["zh-Hans"] && "string" === typeof input["zh-Hant"] && "string" === typeof input.en && "string" === typeof input.fr && "string" === typeof input.de && "string" === typeof input.ja && "string" === typeof input.ko && "string" === typeof input.pt && "string" === typeof input.ru;
    return "object" === typeof input && null !== input && $io0(input);
}; const prune = (input: DynamicEnumeration): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("ar" === key || "zh-Hans" === key || "zh-Hant" === key || "en" === key || "fr" === key || "de" === key || "ja" === key || "ko" === key || "pt" === key || "ru" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; })(input), DynamicEnumeration.SPOILERS);
