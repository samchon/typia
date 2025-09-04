import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_createAssertQueryCustom_ObjectHttpNullable = (): void =>
  _test_http_assertQuery(CustomGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)(
    typia.http.createAssertQuery<ObjectHttpNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
