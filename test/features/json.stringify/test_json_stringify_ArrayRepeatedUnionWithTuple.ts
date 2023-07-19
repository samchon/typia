import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_stringify_ArrayRepeatedUnionWithTuple =
    _test_json_stringify<ArrayRepeatedUnionWithTuple>(
        ArrayRepeatedUnionWithTuple,
    )((input) => typia.json.stringify(input));
