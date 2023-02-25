import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_TupleRestAtomic = _test_stringify("TupleRestAtomic", TupleRestAtomic.generate, (input: TupleRestAtomic): string => {
    const $string = (typia.createStringify as any).string;
    const $rest = (typia.createStringify as any).rest;
    return `[${input[0]},${input[1]}${$rest(`[${input.slice(2).map((elem: any) => $string(elem)).join(",")}]`)}]`;
});
