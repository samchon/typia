import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_assertEqualsCustom_ObjectPropertyNullable =
  _test_assertEquals(CustomGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)((input) =>
    typia.assertEquals<ObjectPropertyNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
