import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_createAssertQueryCustom_ObjectHttpTypeTag = (): void =>
  _test_http_assertQuery(CustomGuardError)(
    "ObjectHttpTypeTag",
  )<ObjectHttpTypeTag>(ObjectHttpTypeTag)(
    typia.http.createAssertQuery<ObjectHttpTypeTag>(
      (p) => new CustomGuardError(p),
    ),
  );
