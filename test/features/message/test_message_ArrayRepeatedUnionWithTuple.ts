import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_message_ArrayRepeatedUnionWithTuple = _test_message(
    "ArrayRepeatedUnionWithTuple",
    typia.message<ArrayRepeatedUnionWithTuple>(),
);
