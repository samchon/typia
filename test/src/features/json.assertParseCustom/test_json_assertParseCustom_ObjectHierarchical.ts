import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_assertParseCustom_ObjectHierarchical = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "ObjectHierarchical",
  )<ObjectHierarchical>(ObjectHierarchical)((input) =>
    typia.json.assertParse<ObjectHierarchical>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
