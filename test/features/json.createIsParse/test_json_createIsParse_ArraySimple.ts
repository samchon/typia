import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_isParse_ArraySimple = _test_json_isParse(
    "ArraySimple",
    ArraySimple.generate,
    typia.json.createIsParse<ArraySimple>(),
    ArraySimple.SPOILERS,
);
