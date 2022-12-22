import typia from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_SetUnion = _test_message(
    "SetUnion",
    typia.message<SetUnion>(),
);