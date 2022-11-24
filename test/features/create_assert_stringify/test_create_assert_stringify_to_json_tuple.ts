import TSON from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_to_json_tuple =
    _test_assert_stringify(
        "toJSON() method returning tuple type",
        ToJsonTuple.generate,
        TSON.createAssertStringify<ToJsonTuple>(),
    );
