import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_assertParseCustom_ObjectPropertyNullable = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)((input) =>
    typia.json.assertParse<ObjectPropertyNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
