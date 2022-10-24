import TSON from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_to_json_array =
    _test_assert_stringify(
        "toJSON() returning array",
        ToJsonArray.generate,
        TSON.createAssertStringify<ToJsonArray>(),
    );
