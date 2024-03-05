import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_json_assertStringifyCustom_ObjectSimple =
  _test_json_assertStringify(CustomGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )((input) =>
    typia.json.assertStringify<ObjectSimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
