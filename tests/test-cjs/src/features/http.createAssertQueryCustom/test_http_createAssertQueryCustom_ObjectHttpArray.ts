import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_createAssertQueryCustom_ObjectHttpArray = (): void =>
  _test_http_assertQuery(CustomGuardError)("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )(
    typia.http.createAssertQuery<ObjectHttpArray>(
      (p) => new CustomGuardError(p),
    ),
  );
