import typia from "../../../src";
import { AtomicClass } from "../../structures/AtomicClass";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_AtomicClass = _test_prune(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.prune(input),
);