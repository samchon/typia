import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_createAssertParseCustom_ObjectOptional = (): void =>
  _test_json_assertParse(CustomGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )(
    typia.json.createAssertParse<ObjectOptional>(
      (p) => new CustomGuardError(p),
    ),
  );
