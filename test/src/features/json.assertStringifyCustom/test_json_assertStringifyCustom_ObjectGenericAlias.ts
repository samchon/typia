import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_assertStringifyCustom_ObjectGenericAlias =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
    typia.json.assertStringify<ObjectGenericAlias>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
