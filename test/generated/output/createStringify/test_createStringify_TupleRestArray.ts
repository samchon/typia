import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_TupleRestArray = _test_stringify("TupleRestArray", TupleRestArray.generate, (input: TupleRestArray): string => {
    const $string = (typia.createStringify as any).string;
    const $rest = (typia.createStringify as any).rest;
    return `[${input[0]},${input[1]}${$rest(`[${input.slice(2).map((elem: any) => `[${elem.map((elem: any) => $string(elem)).join(",")}]`).join(",")}]`)}]`;
});
