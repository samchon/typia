import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_message_ArrayRepeatedNullable = _test_message(
    "ArrayRepeatedNullable",
    typia.message<ArrayRepeatedNullable>(),
);
