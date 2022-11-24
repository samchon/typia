import TSON from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_to_json_tuple = _test_assert_clone(
    "toJSON() method returning tuple type",
    ToJsonTuple.generate,
    TSON.createAssertClone<ToJsonTuple>(),
);
