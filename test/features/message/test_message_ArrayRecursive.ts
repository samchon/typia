import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_message } from "../internal/_test_message";

export const test_message_ArrayRecursive = _test_message(
    "ArrayRecursive",
    typia.message<ArrayRecursive>(),
);