import typia from "../../../src";

import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_createValidateParse_ObjectHierarchical = _test_validateParse(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createValidateParse<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
