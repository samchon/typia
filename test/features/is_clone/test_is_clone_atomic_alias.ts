import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_atomic_alias = _test_is_clone(
    "generic alias",
    AtomicAlias.generate,
    (input) => TSON.isClone(input),
    AtomicAlias.SPOILERS,
);
