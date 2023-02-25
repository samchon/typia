import typia from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_TupleRestObject = _test_stringify("TupleRestObject", TupleRestObject.generate, (input: TupleRestObject): string => {
    const $string = (typia.createStringify as any).string;
    const $rest = (typia.createStringify as any).rest;
    return `[${input[0]},${input[1]}${$rest(`[${input.slice(2).map((elem: any) => `{"value":${$string(elem.value)}}`).join(",")}]`)}]`;
});
