import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_message_ObjectSimple = _test_message(
    "ObjectSimple",
    typia.message<ObjectSimple>(),
);
