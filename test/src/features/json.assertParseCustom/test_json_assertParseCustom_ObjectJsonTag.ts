import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_assertParseCustom_ObjectJsonTag = (): void =>
  _test_json_assertParse(CustomGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )((input) =>
    typia.json.assertParse<ObjectJsonTag>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
