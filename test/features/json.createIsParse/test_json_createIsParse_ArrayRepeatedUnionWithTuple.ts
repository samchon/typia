import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_createIsParse_ArrayRepeatedUnionWithTuple =
    _test_json_isParse(
        "ArrayRepeatedUnionWithTuple",
    )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
        typia.json.createIsParse<ArrayRepeatedUnionWithTuple>(),
    );
