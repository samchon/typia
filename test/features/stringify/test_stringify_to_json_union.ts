import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_to_json_with_union = _test_stringify(
    "toJSON() with other union",
    ToJsonUnion.generate,
    (input) => TSON.stringify(input),
);
