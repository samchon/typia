import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_assertQueryCustom_ObjectHttpConstant = (): void =>
  _test_http_assertQuery(CustomGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
    typia.http.assertQuery<ObjectHttpConstant>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
