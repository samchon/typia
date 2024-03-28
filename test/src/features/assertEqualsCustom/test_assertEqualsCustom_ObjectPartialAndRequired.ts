import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_assertEqualsCustom_ObjectPartialAndRequired =
  _test_assertEquals(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
    typia.assertEquals<ObjectPartialAndRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
