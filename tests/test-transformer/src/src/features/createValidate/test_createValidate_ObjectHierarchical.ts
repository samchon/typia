import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createValidate_ObjectHierarchical = (): void => _test_validate(
    "ObjectHierarchical",
)<ObjectHierarchical>(
    ObjectHierarchical
)(typia.createValidate<ObjectHierarchical>());
