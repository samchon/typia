import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_isParse_ArrayRepeatedUnionWithTuple = _test_json_isParse(
    "ArrayRepeatedUnionWithTuple",
)<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)((input) =>
    typia.json.isParse<ArrayRepeatedUnionWithTuple>(input),
);
