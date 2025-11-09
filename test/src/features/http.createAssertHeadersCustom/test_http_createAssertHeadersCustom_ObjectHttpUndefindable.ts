import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_createAssertHeadersCustom_ObjectHttpUndefindable =
  (): void =>
    _test_http_assertHeaders(CustomGuardError)(
      "ObjectHttpUndefindable",
    )<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
      typia.http.createAssertHeaders<ObjectHttpUndefindable>(
        (p) => new CustomGuardError(p),
      ),
    );
