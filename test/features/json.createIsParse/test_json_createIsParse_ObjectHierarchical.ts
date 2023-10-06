import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_createIsParse_ObjectHierarchical = _test_json_isParse(
    "ObjectHierarchical",
)<ObjectHierarchical>(
    ObjectHierarchical
)(typia.json.createIsParse<ObjectHierarchical>());
