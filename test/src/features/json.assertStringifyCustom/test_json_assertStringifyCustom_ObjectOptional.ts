import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ObjectOptional =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectOptional",
  )<ObjectOptional>(ObjectOptional)((input) =>
    typia.json.assertStringify<ObjectOptional>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
