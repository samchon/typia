import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_isStringify_ArrayRepeatedUnionWithTuple =
    _test_json_isStringify<ArrayRepeatedUnionWithTuple>(
        ArrayRepeatedUnionWithTuple,
    )(typia.json.createIsStringify<ArrayRepeatedUnionWithTuple>());
