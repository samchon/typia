import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_DynamicEnumeration = _test_isStringify("DynamicEnumeration", DynamicEnumeration.generate, (input: DynamicEnumeration): string | null => { const is = (input: any): input is DynamicEnumeration => {
    const $io0 = (input: any) => "string" === typeof input.ar && "string" === typeof input["zh-Hans"] && "string" === typeof input["zh-Hant"] && "string" === typeof input.en && "string" === typeof input.fr && "string" === typeof input.de && "string" === typeof input.ja && "string" === typeof input.ko && "string" === typeof input.pt && "string" === typeof input.ru;
    return "object" === typeof input && null !== input && $io0(input);
}; const stringify = (input: DynamicEnumeration): string => {
    const $string = (typia.createIsStringify as any).string;
    const $so0 = (input: any) => `{"ar":${$string(input.ar)},"zh-Hans":${$string(input["zh-Hans"])},"zh-Hant":${$string(input["zh-Hant"])},"en":${$string(input.en)},"fr":${$string(input.fr)},"de":${$string(input.de)},"ja":${$string(input.ja)},"ko":${$string(input.ko)},"pt":${$string(input.pt)},"ru":${$string(input.ru)}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; }, DynamicEnumeration.SPOILERS);
