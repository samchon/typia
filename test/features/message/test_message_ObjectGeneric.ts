import typia from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectGeneric = _test_message(
    "ObjectGeneric",
    typia.message<ObjectGeneric>(),
);