import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_createAssertParseCustom_ObjectGenericAlias = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)(
    typia.json.createAssertParse<ObjectGenericAlias>(
      (p) => new CustomGuardError(p),
    ),
  );
