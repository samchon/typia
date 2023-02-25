import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_DynamicEnumeration = _test_isClone("DynamicEnumeration", DynamicEnumeration.generate, (input) => ((input: any): typia.Primitive<DynamicEnumeration> | null => { const is = (input: any): input is DynamicEnumeration => {
    const $io0 = (input: any) => "string" === typeof input.ar && "string" === typeof input["zh-Hans"] && "string" === typeof input["zh-Hant"] && "string" === typeof input.en && "string" === typeof input.fr && "string" === typeof input.de && "string" === typeof input.ja && "string" === typeof input.ko && "string" === typeof input.pt && "string" === typeof input.ru;
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: DynamicEnumeration): typia.Primitive<DynamicEnumeration> => {
    const $co0 = (input: any) => ({
        ar: input.ar,
        "zh-Hans": input["zh-Hans"],
        "zh-Hant": input["zh-Hant"],
        en: input.en,
        fr: input.fr,
        de: input.de,
        ja: input.ja,
        ko: input.ko,
        pt: input.pt,
        ru: input.ru
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), DynamicEnumeration.SPOILERS);
