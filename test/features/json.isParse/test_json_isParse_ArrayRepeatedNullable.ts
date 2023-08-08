import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_json_isParse_ArrayRepeatedNullable = _test_json_isParse(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.json.isParse<ArrayRepeatedNullable>(input),
    ArrayRepeatedNullable.SPOILERS,
);
