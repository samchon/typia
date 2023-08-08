import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_isStringify_ArrayRepeatedUnion = _test_json_isStringify(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.json.createIsStringify<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
