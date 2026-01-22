import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_assertParseCustom_ObjectRequired = (): void =>
  _test_json_assertParse(CustomGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )((input) =>
    typia.json.assertParse<ObjectRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
