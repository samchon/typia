import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ArrayMatrix = _test_clone("ArrayMatrix", ArrayMatrix.generate, (input) => ((input: ArrayMatrix): typia.Primitive<ArrayMatrix> => {
    return Array.isArray(input) ? input.map((elem: any) => Array.isArray(elem) ? elem.map((elem: any) => Array.isArray(elem) ? elem.map((elem: any) => elem) : elem) : elem) : input;
})(input));
