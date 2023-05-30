import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
export const test_createClone_DynamicEnumeration = _test_clone("DynamicEnumeration", DynamicEnumeration.generate, (input: DynamicEnumeration): typia.Primitive<DynamicEnumeration> => {
    const $co0 = (input: any): any => ({
        ar: input.ar as any,
        "zh-Hans": input["zh-Hans"] as any,
        "zh-Hant": input["zh-Hant"] as any,
        en: input.en as any,
        fr: input.fr as any,
        de: input.de as any,
        ja: input.ja as any,
        ko: input.ko as any,
        pt: input.pt as any,
        ru: input.ru as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
});
