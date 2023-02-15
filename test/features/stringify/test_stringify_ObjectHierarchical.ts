import typia from "typia";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectHierarchical = _test_stringify(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.stringify(input),
);
