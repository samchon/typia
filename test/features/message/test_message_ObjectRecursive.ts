import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_message_ObjectRecursive = _test_message(
    "ObjectRecursive",
    typia.message<ObjectRecursive>(),
);
