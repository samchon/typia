import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_createIsParse_ObjectHierarchical = (): void => _test_json_isParse(
    "ObjectHierarchical",
)<ObjectHierarchical>(
    ObjectHierarchical
)(typia.json.createIsParse<ObjectHierarchical>());
