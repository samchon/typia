import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_DynamicEnumeration = _test_clone("DynamicEnumeration", DynamicEnumeration.generate, (input: DynamicEnumeration): typia.Primitive<DynamicEnumeration> => {
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
});
