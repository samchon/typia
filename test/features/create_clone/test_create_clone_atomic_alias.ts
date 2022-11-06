import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_atomic_alias = _test_clone(
    "generic alias",
    AtomicAlias.generate,
    TSON.createClone<AtomicAlias>(),
);
