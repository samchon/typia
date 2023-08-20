import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_clone_ObjectIntersection = _test_clone(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.clone<ObjectIntersection>(input),
);
