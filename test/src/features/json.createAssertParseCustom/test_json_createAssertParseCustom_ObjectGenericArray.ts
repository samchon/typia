import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_createAssertParseCustom_ObjectGenericArray =
  _test_json_assertParse(CustomGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)(
    typia.json.createAssertParse<ObjectGenericArray>(
      (p) => new CustomGuardError(p),
    ),
  );
