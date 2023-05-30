import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { AtomicSimple } from "../../../structures/AtomicSimple";
export const test_createPrune_AtomicSimple = _test_prune("AtomicSimple", AtomicSimple.generate, (input: AtomicSimple): void => {
});
