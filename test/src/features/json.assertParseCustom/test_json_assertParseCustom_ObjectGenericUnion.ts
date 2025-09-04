import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_json_assertParseCustom_ObjectGenericUnion = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)((input) =>
    typia.json.assertParse<ObjectGenericUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
