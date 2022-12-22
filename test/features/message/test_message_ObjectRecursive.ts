import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectRecursive = _test_message(
    "ObjectRecursive",
    typia.message<ObjectRecursive>(),
);