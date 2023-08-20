import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_stringify_ObjectIntersection = _test_stringify(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.stringify<ObjectIntersection>(input),
);
