import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_misc_prune_AtomicUnion = _test_misc_prune(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => ((input: Array<AtomicUnion.Union>): void => {})(input),
);
