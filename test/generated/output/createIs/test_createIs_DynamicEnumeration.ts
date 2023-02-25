import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_is } from "../internal/_test_is";
export const test_createIs_DynamicEnumeration = _test_is("DynamicEnumeration", DynamicEnumeration.generate, (input: any): input is DynamicEnumeration => {
    const $io0 = (input: any) => "string" === typeof input.ar && "string" === typeof input["zh-Hans"] && "string" === typeof input["zh-Hant"] && "string" === typeof input.en && "string" === typeof input.fr && "string" === typeof input.de && "string" === typeof input.ja && "string" === typeof input.ko && "string" === typeof input.pt && "string" === typeof input.ru;
    return "object" === typeof input && null !== input && $io0(input);
}, DynamicEnumeration.SPOILERS);
