import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_assertQueryCustom_ObjectHttpTypeTag =
  _test_http_assertQuery(CustomGuardError)(
    "ObjectHttpTypeTag",
  )<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
    typia.http.assertQuery<ObjectHttpTypeTag>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
