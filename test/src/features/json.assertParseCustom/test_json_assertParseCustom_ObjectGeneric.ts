import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_assertParseCustom_ObjectGeneric = (): void =>
  _test_json_assertParse(CustomGuardError)("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
  )((input) =>
    typia.json.assertParse<ObjectGeneric>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
