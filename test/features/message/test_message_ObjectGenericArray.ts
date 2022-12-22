import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectGenericArray = _test_message(
    "ObjectGenericArray",
    typia.message<ObjectGenericArray>(),
);