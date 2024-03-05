import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_assertParseCustom_ObjectOptional =
  _test_json_assertParse(CustomGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )((input) =>
    typia.json.assertParse<ObjectOptional>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
