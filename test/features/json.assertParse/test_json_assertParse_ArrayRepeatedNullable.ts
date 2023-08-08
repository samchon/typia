import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_json_assertParse_ArrayRepeatedNullable =
    _test_json_assertParse(
        "ArrayRepeatedNullable",
        ArrayRepeatedNullable.generate,
        (input) => typia.json.assertParse<ArrayRepeatedNullable>(input),
        ArrayRepeatedNullable.SPOILERS,
    );
