import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_json_createAssertStringifyCustom_ObjectGenericUnion =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)(
    typia.json.createAssertStringify<ObjectGenericUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
