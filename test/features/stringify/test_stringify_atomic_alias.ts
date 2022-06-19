import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_atomic_alias = _test_stringify(
    "generic alias",
    AtomicAlias.generate(),
    (input) => TSON.stringify(input),
);
