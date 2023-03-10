import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_message_ObjectTuple = _test_message(
    "ObjectTuple",
    typia.message<ObjectTuple>(),
);
