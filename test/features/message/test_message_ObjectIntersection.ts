import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectIntersection = _test_message(
    "ObjectIntersection",
    typia.message<ObjectIntersection>(),
);