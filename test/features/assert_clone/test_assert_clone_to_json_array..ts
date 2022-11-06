import TSON from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_to_json_array = _test_assert_clone(
    "toJSON() returning array",
    ToJsonArray.generate,
    (input) => TSON.assertClone(input),
);
