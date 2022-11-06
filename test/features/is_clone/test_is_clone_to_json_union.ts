import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_to_json_with_union = _test_is_clone(
    "toJSON() with other union",
    ToJsonUnion.generate,
    (input) => TSON.isClone(input),
);
