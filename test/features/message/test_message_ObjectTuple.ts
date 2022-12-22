import typia from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectTuple = _test_message(
    "ObjectTuple",
    typia.message<ObjectTuple>(),
);