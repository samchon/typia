import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_clone } from "./_test_clone";

export const test_clone_atomic_union = _test_clone(
    "union atomic",
    AtomicUnion.generate,
    (input) => TSON.clone(input),
);
