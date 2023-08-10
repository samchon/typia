import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_assertParse_ArrayRepeatedUnionWithTuple =
    _test_json_assertParse<ArrayRepeatedUnionWithTuple>(
        ArrayRepeatedUnionWithTuple,
    )(typia.json.createAssertParse<ArrayRepeatedUnionWithTuple>());
