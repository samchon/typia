import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_assertHeadersCustom_ObjectHttpUndefindable = (): void =>
  _test_http_assertHeaders(CustomGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
    typia.http.assertHeaders<ObjectHttpUndefindable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
