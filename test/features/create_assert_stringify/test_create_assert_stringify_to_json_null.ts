import TSON from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_to_json_null = _test_assert_stringify(
    "toJSON() returning null",
    ToJsonNull.generate,
    TSON.createAssertStringify<ToJsonNull>(),
);
