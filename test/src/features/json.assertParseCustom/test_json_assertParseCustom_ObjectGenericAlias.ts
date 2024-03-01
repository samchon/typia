import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_assertParseCustom_ObjectGenericAlias =
  _test_json_assertParse(CustomGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
    typia.json.assertParse<ObjectGenericAlias>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
