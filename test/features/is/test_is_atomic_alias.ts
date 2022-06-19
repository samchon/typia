import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_is } from "./_test_is";

export const test_is_atomic_alias = _test_is(
    "generic alias",
    AtomicAlias.generate,
    (input) => TSON.is(input),
);
