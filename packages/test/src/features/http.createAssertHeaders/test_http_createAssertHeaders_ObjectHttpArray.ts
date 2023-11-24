import typia from "typia";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_createAssertHeaders_ObjectHttpArray =
  _test_http_assertHeaders("ObjectHttpArray")<ObjectHttpArray>(ObjectHttpArray)(
    typia.http.createAssertHeaders<ObjectHttpArray>(),
  );
