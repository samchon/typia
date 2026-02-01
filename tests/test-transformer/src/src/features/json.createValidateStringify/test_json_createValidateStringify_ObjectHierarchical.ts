import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_createValidateStringify_ObjectHierarchical = (): void => _test_json_validateStringify(
    "ObjectHierarchical",
)<ObjectHierarchical>(
    ObjectHierarchical
)(typia.json.createValidateStringify<ObjectHierarchical>());
