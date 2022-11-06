import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_atomic_alias = _test_is_clone(
    "generic alias",
    AtomicAlias.generate,
    TSON.createIsClone<AtomicAlias>(),
    AtomicAlias.SPOILERS,
);
