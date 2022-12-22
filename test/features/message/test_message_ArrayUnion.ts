import typia from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_ArrayUnion = _test_message(
    "ArrayUnion",
    typia.message<ArrayUnion>(),
);