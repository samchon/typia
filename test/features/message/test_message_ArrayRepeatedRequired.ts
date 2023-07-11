import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_message_ArrayRepeatedRequired = _test_message(
    "ArrayRepeatedRequired",
    typia.message<ArrayRepeatedRequired>(),
);
