import TSON from "../../../src";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_to_json_undefined = _test_assert_stringify(
    "toJSON() returning undefined",
    ToJsonUndefined.generate,
    (input) => TSON.assertStringify(input),
);
