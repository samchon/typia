import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_message_ArrayRepeatedUnion = _test_message(
    "ArrayRepeatedUnion",
    typia.message<ArrayRepeatedUnion>(),
);
