import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_to_json_double = _test_assert_clone(
    "twice duplicated toJSON() method type",
    ToJsonDouble.generate,
    (input) => TSON.assertClone(input),
);
