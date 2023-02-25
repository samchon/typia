import typia from "../../../src";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectHierarchical = _test_validateEquals(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createValidateEquals<ObjectHierarchical>(),
);
