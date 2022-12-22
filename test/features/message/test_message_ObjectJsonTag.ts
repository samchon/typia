import typia from "../../../src";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectJsonTag = _test_message(
    "ObjectJsonTag",
    typia.message<ObjectJsonTag>(),
);