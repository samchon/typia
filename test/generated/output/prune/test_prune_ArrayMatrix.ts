import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
export const test_prune_ArrayMatrix = _test_prune("ArrayMatrix", ArrayMatrix.generate, (input) => ((input: Array<Array<Array<number>>>): void => {
})(input));
