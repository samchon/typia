import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createClone_ObjectIntersection = _test_clone(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createClone<ObjectIntersection>(),
);
