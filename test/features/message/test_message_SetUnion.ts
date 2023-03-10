import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { SetUnion } from "../../structures/SetUnion";

export const test_message_SetUnion = _test_message(
    "SetUnion",
    typia.message<SetUnion>(),
);
