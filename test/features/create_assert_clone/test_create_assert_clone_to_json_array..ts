import TSON from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_to_json_array =
    _test_assert_clone(
        "toJSON() returning array",
        ToJsonArray.generate,
        TSON.createAssertClone<ToJsonArray>(),
    );
