import typia from "../../../src";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectHierarchical = _test_equals(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.equals(input),
);
