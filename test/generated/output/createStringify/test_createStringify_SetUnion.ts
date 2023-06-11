import typia from "../../../../src";
import { SetUnion } from "../../../structures/SetUnion";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_createStringify_SetUnion = _test_stringify("SetUnion", SetUnion.generate, (input: SetUnion): string => {
    const $string = (typia.createStringify as any).string;
    const $number = (typia.createStringify as any).number;
    return `[${input.map((elem: any) => "{}").join(",")}]`;
});
