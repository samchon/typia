import TSON from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_to_json_atomic_union = _test_is_stringify(
    "toJSON() method returning atomic union type",
    ToJsonAtomicUnion.generate,
    (input) => TSON.isStringify(input),
);
