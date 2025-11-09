import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_assertHeadersCustom_ObjectHttpArray = (): void =>
  _test_http_assertHeaders(CustomGuardError)(
    "ObjectHttpArray",
  )<ObjectHttpArray>(ObjectHttpArray)((input) =>
    typia.http.assertHeaders<ObjectHttpArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
