import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ArraySimple } from "../../../structures/ArraySimple";
export const test_stringify_ArraySimple = _test_stringify("ArraySimple", ArraySimple.generate, (input) => ((input: Array<ArraySimple.IPerson>): string => {
    const $string = (typia.stringify as any).string;
    const $number = (typia.stringify as any).number;
    const $io1 = (input: any): boolean => "string" === typeof input.name && "string" === typeof input.body && "number" === typeof input.rank;
    const $so0 = (input: any): any => `{"name":${$string(input.name)},"email":${$string(input.email)},"hobbies":${`[${input.hobbies.map((elem: any) => `{"name":${$string(elem.name)},"body":${$string(elem.body)},"rank":${$number(elem.rank)}}`).join(",")}]`}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
})(input));
