import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_assertParse_ObjectPropertyNullable =
  _test_json_assertParse(TypeGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)((input) =>
    typia.json.assertParse<ObjectPropertyNullable>(input),
  );
