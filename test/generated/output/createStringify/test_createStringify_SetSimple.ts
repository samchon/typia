import typia from "../../../../src";
import { SetSimple } from "../../../structures/SetSimple";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_createStringify_SetSimple = _test_stringify("SetSimple", SetSimple.generate, (input: SetSimple): string => {
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    const $string = (typia.createStringify as any).string;
    const $number = (typia.createStringify as any).number;
    const $so0 = (input: any): any => "{\"booleans\":{},\"numbers\":{},\"strings\":{},\"arrays\":{},\"objects\":{}}";
    return $so0(input);
});
