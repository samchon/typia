import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_to_json_with_union =
    _test_assert_stringify(
        "toJSON() with other union",
        ToJsonUnion.generate,
        TSON.createAssertStringify<ToJsonUnion>(),
    );
