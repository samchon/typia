import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_to_json_double = _test_assert_stringify(
    "twice duplicated toJSON() method type",
    ToJsonDouble.generate,
    (input) => TSON.assertStringify(input),
);
