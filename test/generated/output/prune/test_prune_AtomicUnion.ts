import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_prune_AtomicUnion = _test_prune(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => ((input: Array<AtomicUnion.Union>): void => {})(input),
);
