import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createEquals_ObjectHierarchical = _test_equals(
    "ObjectHierarchical",
)<ObjectHierarchical>(
    ObjectHierarchical
)(typia.createEquals<ObjectHierarchical>());
