import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_createAssertQueryCustom_ObjectHttpConstant =
  _test_http_assertQuery(CustomGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)(
    typia.http.createAssertQuery<ObjectHttpConstant>(
      (p) => new CustomGuardError(p),
    ),
  );
