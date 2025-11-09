import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectHierarchical = (): void => _test_json_assertParse(CustomGuardError)(
    "ObjectHierarchical",
)<ObjectHierarchical>(
    ObjectHierarchical
)(typia.json.createAssertParse<ObjectHierarchical>((p) => new CustomGuardError(p)));
