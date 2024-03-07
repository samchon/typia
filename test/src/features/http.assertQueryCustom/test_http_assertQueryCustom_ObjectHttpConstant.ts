import typia from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_http_assertQueryCustom_ObjectHttpConstant =
  _test_http_assertQuery(CustomGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
    typia.http.assertQuery<ObjectHttpConstant>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
