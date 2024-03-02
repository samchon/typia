import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_assertParseCustom_ObjectGenericArray =
  _test_json_assertParse(CustomGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)((input) =>
    typia.json.assertParse<ObjectGenericArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
