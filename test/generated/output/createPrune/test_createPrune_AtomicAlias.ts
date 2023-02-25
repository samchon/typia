import typia from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_prune } from "../internal/_test_prune";
export const test_createPrune_AtomicAlias = _test_prune("AtomicAlias", AtomicAlias.generate, (input: AtomicAlias): void => {
});
