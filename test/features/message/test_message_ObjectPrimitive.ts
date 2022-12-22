import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectPrimitive = _test_message(
    "ObjectPrimitive",
    typia.message<ObjectPrimitive>(),
);