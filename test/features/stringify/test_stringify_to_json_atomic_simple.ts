import TSON from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_to_json_atomic_simple = _test_stringify(
    "toJSON() returning atomic value",
    ToJsonAtomicSimple.generate,
    (input) => TSON.stringify(input),
);
