import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_createAssertQueryCustom_ObjectHttpUndefindable =
  _test_http_assertQuery(CustomGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
    typia.http.createAssertQuery<ObjectHttpUndefindable>(
      (p) => new CustomGuardError(p),
    ),
  );
