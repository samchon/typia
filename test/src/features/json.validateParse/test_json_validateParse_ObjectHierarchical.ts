import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_validateParse_ObjectHierarchical = (): void => _test_json_validateParse(
    "ObjectHierarchical",
)<ObjectHierarchical>(
    ObjectHierarchical
)((input) => typia.json.validateParse<ObjectHierarchical>(input));
