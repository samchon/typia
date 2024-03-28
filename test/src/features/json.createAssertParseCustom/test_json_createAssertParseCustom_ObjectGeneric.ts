import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_createAssertParseCustom_ObjectGeneric =
  _test_json_assertParse(CustomGuardError)("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
  )(
    typia.json.createAssertParse<ObjectGeneric>((p) => new CustomGuardError(p)),
  );
