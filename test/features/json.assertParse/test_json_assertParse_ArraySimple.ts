import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_assertParse_ArraySimple = _test_json_assertParse(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.json.assertParse<ArraySimple>(input),
    ArraySimple.SPOILERS,
);
