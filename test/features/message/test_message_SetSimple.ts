import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { SetSimple } from "../../structures/SetSimple";

export const test_message_SetSimple = _test_message(
    "SetSimple",
    typia.message<SetSimple>(),
);
