import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
export const test_createPrune_ArrayMatrix = _test_prune("ArrayMatrix", ArrayMatrix.generate, (input: ArrayMatrix): void => {
});
