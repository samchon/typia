import typia from "typia";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectHierarchical = _test_validate(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.validate(input),
    ObjectHierarchical.SPOILERS,
);
