import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_assertHeadersCustom_ObjectHttpTypeTag = (): void =>
  _test_http_assertHeaders(CustomGuardError)(
    "ObjectHttpTypeTag",
  )<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
    typia.http.assertHeaders<ObjectHttpTypeTag>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
