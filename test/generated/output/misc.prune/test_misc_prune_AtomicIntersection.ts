import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_misc_prune_AtomicIntersection = _test_misc_prune(
    "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)((input) =>
    ((input: AtomicIntersection): void => {})(input),
);
