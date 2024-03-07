import typia from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_http_assertQueryCustom_ObjectHttpUndefindable =
  _test_http_assertQuery(CustomGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
    typia.http.assertQuery<ObjectHttpUndefindable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
