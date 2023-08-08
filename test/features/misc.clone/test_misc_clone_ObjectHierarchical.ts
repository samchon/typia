import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_clone_ObjectHierarchical = _test_misc_clone(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.misc.clone(input),
);
