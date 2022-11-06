import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_clone } from "./_test_clone";

export const test_clone_atomic_alias = _test_clone(
    "generic alias",
    AtomicAlias.generate,
    (input) => TSON.clone(input),
);
