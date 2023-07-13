import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_isParse_ArrayAny = _test_json_isParse(
    "ArrayAny",
    ArrayAny.generate,
    typia.json.createIsParse<ArrayAny>(),
    ArrayAny.SPOILERS,
);
