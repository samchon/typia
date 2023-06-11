import typia from "../../../../src";
import { SetUnion } from "../../../structures/SetUnion";
import { _test_clone } from "../../../internal/_test_clone";
export const test_clone_SetUnion = _test_clone("SetUnion", SetUnion.generate, (input) => ((input: Array<SetUnion.Union>): typia.Primitive<Array<SetUnion.Union>> => {
    const $cp0 = (input: any) => input.map((elem: any) => elem instanceof Set ? {} : elem as any);
    return Array.isArray(input) ? $cp0(input) : input as any;
})(input));
