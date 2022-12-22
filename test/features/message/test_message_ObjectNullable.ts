import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectNullable = _test_message(
    "ObjectNullable",
    typia.message<ObjectNullable>(),
);