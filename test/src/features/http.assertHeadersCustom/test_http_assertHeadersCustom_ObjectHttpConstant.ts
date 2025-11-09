import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_assertHeadersCustom_ObjectHttpConstant = (): void =>
  _test_http_assertHeaders(CustomGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
    typia.http.assertHeaders<ObjectHttpConstant>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
