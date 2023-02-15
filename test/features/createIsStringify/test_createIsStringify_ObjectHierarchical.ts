import typia from "typia";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectHierarchical = _test_isStringify(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createIsStringify<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
