import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_assertParse_ArrayAny = _test_json_assertParse(
    "ArrayAny",
    ArrayAny.generate,
    typia.json.createAssertParse<ArrayAny>(),
    ArrayAny.SPOILERS,
);
