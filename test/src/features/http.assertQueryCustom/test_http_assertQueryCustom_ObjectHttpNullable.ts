import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_assertQueryCustom_ObjectHttpNullable =
  _test_http_assertQuery(CustomGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
    typia.http.assertQuery<ObjectHttpNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
