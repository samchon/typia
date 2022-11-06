import TSON from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_atomic_union = _test_clone(
    "union atomic",
    AtomicUnion.generate,
    TSON.createClone<AtomicUnion>(),
);
