import typia from "../../../../src";
import { TupleRestArray } from "../../../structures/TupleRestArray";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_stringify_TupleRestArray = _test_stringify("TupleRestArray", TupleRestArray.generate, (input) => ((input: [boolean, number, ...Array<string>[]]): string => {
    const $number = (typia.stringify as any).number;
    const $string = (typia.stringify as any).string;
    const $rest = (typia.stringify as any).rest;
    return `[${input[0]},${$number(input[1])}${$rest(`[${input.slice(2).map((elem: any) => `[${elem.map((elem: any) => $string(elem)).join(",")}]`).join(",")}]`)}]`;
})(input));
