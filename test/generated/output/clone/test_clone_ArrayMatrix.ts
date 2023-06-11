import typia from "../../../../src";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_clone } from "../../../internal/_test_clone";
export const test_clone_ArrayMatrix = _test_clone("ArrayMatrix", ArrayMatrix.generate, (input) => ((input: Array<Array<Array<number>>>): typia.Primitive<Array<Array<Array<number>>>> => {
    const $cp0 = (input: any) => input.map((elem: any) => elem as any);
    const $cp1 = (input: any) => input.map((elem: any) => Array.isArray(elem) ? $cp0(elem) : elem as any);
    const $cp2 = (input: any) => input.map((elem: any) => Array.isArray(elem) ? $cp1(elem) : elem as any);
    return Array.isArray(input) ? $cp2(input) : input as any;
})(input));
