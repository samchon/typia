import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_clone_ObjectIntersection = _test_misc_clone(
    "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)(
    typia.misc.createClone<ObjectIntersection>(),
);
