import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_DynamicEnumeration = _test_equals("DynamicEnumeration", DynamicEnumeration.generate, (input: any, _exceptionable: boolean): input is DynamicEnumeration => {
    const $io0 = (input: any, _exceptionable: boolean) => "string" === typeof input.ar && "string" === typeof input["zh-Hans"] && "string" === typeof input["zh-Hant"] && "string" === typeof input.en && "string" === typeof input.fr && "string" === typeof input.de && "string" === typeof input.ja && "string" === typeof input.ko && "string" === typeof input.pt && "string" === typeof input.ru && (10 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["ar", "zh-Hans", "zh-Hant", "en", "fr", "de", "ja", "ko", "pt", "ru"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return "object" === typeof input && null !== input && $io0(input, true);
});
