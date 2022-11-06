import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_to_json_with_union = _test_assert_clone(
    "toJSON() with other union",
    ToJsonUnion.generate,
    (input) => TSON.assertClone(input),
);
