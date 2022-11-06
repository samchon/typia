import TSON from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_to_json_tuple = _test_assert_clone(
    "toJSON() method returning tuple type",
    ToJsonTuple.generate,
    (input) => TSON.assertClone(input),
);
