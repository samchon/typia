import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ObjectJsonTag =
  _test_json_assertStringify(CustomGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )((input) =>
    typia.json.assertStringify<ObjectJsonTag>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
