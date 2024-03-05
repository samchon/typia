import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_assertParseCustom_ObjectInternal =
  _test_json_assertParse(CustomGuardError)("ObjectInternal")<ObjectInternal>(
    ObjectInternal,
  )((input) =>
    typia.json.assertParse<ObjectInternal>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
