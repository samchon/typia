import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_message_ArraySimple = _test_message(
    "ArraySimple",
    typia.message<ArraySimple>(),
);
