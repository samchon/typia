import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { DynamicConstant } from "../../../structures/DynamicConstant";
export const test_createIs_DynamicConstant = _test_is("DynamicConstant", DynamicConstant.generate, (input: any): input is DynamicConstant => {
    const $io0 = (input: any): boolean => "number" === typeof input.a && Number.isFinite(input.a) && ("number" === typeof input.b && Number.isFinite(input.b)) && ("number" === typeof input.c && Number.isFinite(input.c)) && ("number" === typeof input.d && Number.isFinite(input.d));
    return "object" === typeof input && null !== input && $io0(input);
}, DynamicConstant.SPOILERS);
