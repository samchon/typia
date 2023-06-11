import typia from "../../../../src";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
import { _test_prune } from "../../../internal/_test_prune";
export const test_prune_ConstantAtomicSimple = _test_prune("ConstantAtomicSimple", ConstantAtomicSimple.generate, (input) => ((input: [false, true, 2, 'three']): void => {
})(input));
