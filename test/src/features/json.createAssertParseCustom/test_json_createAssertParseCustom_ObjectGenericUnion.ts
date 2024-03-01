import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_json_createAssertParseCustom_ObjectGenericUnion =
  _test_json_assertParse(CustomGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)(
    typia.json.createAssertParse<ObjectGenericUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
