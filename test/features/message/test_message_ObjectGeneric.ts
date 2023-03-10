import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_message_ObjectGeneric = _test_message(
    "ObjectGeneric",
    typia.message<ObjectGeneric>(),
);
