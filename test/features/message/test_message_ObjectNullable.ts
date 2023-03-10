import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_message_ObjectNullable = _test_message(
    "ObjectNullable",
    typia.message<ObjectNullable>(),
);
