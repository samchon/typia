import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { AtomicUnion } from "../../../structures/AtomicUnion";
export const test_createPrune_AtomicUnion = _test_prune("AtomicUnion", AtomicUnion.generate, (input: AtomicUnion): void => {
});
