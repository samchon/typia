import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectSimple = _test_message(
    "ObjectSimple",
    typia.message<ObjectSimple>(),
);