import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_json_assertParseCustom_ObjectUnionDouble = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
    typia.json.assertParse<ObjectUnionDouble>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
