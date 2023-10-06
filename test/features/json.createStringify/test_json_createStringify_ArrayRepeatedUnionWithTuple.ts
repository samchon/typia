import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_createStringify_ArrayRepeatedUnionWithTuple = _test_json_stringify(
    "ArrayRepeatedUnionWithTuple",
)<ArrayRepeatedUnionWithTuple>(
    ArrayRepeatedUnionWithTuple
)(typia.json.createStringify<ArrayRepeatedUnionWithTuple>());
