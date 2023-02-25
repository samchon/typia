import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_DynamicEnumeration = _test_stringify("DynamicEnumeration", DynamicEnumeration.generate, (input: DynamicEnumeration): string => {
    const $string = (typia.createStringify as any).string;
    const $so0 = (input: any) => `{"ar":${$string(input.ar)},"zh-Hans":${$string(input["zh-Hans"])},"zh-Hant":${$string(input["zh-Hant"])},"en":${$string(input.en)},"fr":${$string(input.fr)},"de":${$string(input.de)},"ja":${$string(input.ja)},"ko":${$string(input.ko)},"pt":${$string(input.pt)},"ru":${$string(input.ru)}}`;
    return $so0(input);
});
