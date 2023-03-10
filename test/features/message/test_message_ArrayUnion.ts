import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_message_ArrayUnion = _test_message(
    "ArrayUnion",
    typia.message<ArrayUnion>(),
);
