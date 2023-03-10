import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_message_ObjectJsonTag = _test_message(
    "ObjectJsonTag",
    typia.message<ObjectJsonTag>(),
);
