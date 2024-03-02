import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_json_assertParseCustom_ObjectDescription =
  _test_json_assertParse(CustomGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)((input) =>
    typia.json.assertParse<ObjectDescription>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
