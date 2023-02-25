import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_isParse } from "../internal/_test_isParse";
export const test_isParse_DynamicEnumeration = _test_isParse("DynamicEnumeration", DynamicEnumeration.generate, (input) => ((input: any): typia.Primitive<DynamicEnumeration> => { const is = (input: any): input is DynamicEnumeration => {
    const $io0 = (input: any) => "string" === typeof input.ar && "string" === typeof input["zh-Hans"] && "string" === typeof input["zh-Hant"] && "string" === typeof input.en && "string" === typeof input.fr && "string" === typeof input.de && "string" === typeof input.ja && "string" === typeof input.ko && "string" === typeof input.pt && "string" === typeof input.ru;
    return "object" === typeof input && null !== input && $io0(input);
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), DynamicEnumeration.SPOILERS);
