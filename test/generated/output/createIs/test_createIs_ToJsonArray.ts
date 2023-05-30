import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ToJsonArray } from "../../../structures/ToJsonArray";
export const test_createIs_ToJsonArray = _test_is("ToJsonArray", ToJsonArray.generate, (input: any): input is ToJsonArray => {
    const $io0 = (input: any): boolean => "function" === typeof input.toJSON;
    const $io1 = (input: any): boolean => "function" === typeof input.toJSON;
    const $io2 = (input: any): boolean => "function" === typeof input.toJSON;
    const $io3 = (input: any): boolean => "function" === typeof input.toJSON;
    return Array.isArray(input) && (input.length === 4 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2])) && ("object" === typeof input[3] && null !== input[3] && $io3(input[3])));
});
