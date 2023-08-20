import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_clone_ObjectHierarchical = _test_clone(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.clone<ObjectHierarchical>(input),
);
