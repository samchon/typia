import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_message_ObjectGenericArray = _test_message(
    "ObjectGenericArray",
    typia.message<ObjectGenericArray>(),
);
