import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_message_ObjectPrimitive = _test_message(
    "ObjectPrimitive",
    typia.message<ObjectPrimitive>(),
);
