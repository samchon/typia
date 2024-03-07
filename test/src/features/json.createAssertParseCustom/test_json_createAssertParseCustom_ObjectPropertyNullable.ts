import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectPropertyNullable =
  _test_json_assertParse(CustomGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)(
    typia.json.createAssertParse<ObjectPropertyNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
