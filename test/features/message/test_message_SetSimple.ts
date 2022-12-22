import typia from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_message } from "../internal/_test_message";

export const test_message_SetSimple = _test_message(
    "SetSimple",
    typia.message<SetSimple>(),
);