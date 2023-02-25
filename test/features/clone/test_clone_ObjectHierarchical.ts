import typia from "../../../src";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectHierarchical = _test_clone(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.clone(input),
);
