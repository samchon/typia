import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_message_ArrayRecursive = _test_message(
    "ArrayRecursive",
    typia.message<ArrayRecursive>(),
);
