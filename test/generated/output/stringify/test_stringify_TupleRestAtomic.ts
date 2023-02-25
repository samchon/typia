import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_TupleRestAtomic = _test_stringify("TupleRestAtomic", TupleRestAtomic.generate, (input) => ((input: TupleRestAtomic): string => {
    const $number = (typia.stringify as any).number;
    const $string = (typia.stringify as any).string;
    const $rest = (typia.stringify as any).rest;
    return `[${input[0]},${$number(input[1])}${$rest(`[${input.slice(2).map((elem: any) => $string(elem)).join(",")}]`)}]`;
})(input));
