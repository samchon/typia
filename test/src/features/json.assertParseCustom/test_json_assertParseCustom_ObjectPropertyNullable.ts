import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ObjectPropertyNullable =
  _test_json_assertParse(CustomGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)((input) =>
    typia.json.assertParse<ObjectPropertyNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
