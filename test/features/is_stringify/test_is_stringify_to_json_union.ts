import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_to_json_with_union = _test_is_stringify(
    "toJSON() with other union",
    ToJsonUnion.generate,
    (input) => TSON.isStringify(input),
);
