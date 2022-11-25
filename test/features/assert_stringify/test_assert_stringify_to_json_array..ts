import TSON from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_to_json_array = _test_assert_stringify(
    "toJSON() returning array",
    ToJsonArray.generate,
    (input) => TSON.assertStringify(input),
);
