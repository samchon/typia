import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_clone } from "./_test_clone";

export const test_clone_to_json_with_union = _test_clone(
    "toJSON() with other union",
    ToJsonUnion.generate,
    (input) => TSON.clone(input),
);
