import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_message_ObjectIntersection = _test_message(
    "ObjectIntersection",
    typia.message<ObjectIntersection>(),
);
