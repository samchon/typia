import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_AtomicAlias = _test_clone(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) => TSON.clone(input),
);
