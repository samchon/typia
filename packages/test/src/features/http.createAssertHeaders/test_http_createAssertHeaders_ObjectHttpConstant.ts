import typia from "typia";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_createAssertHeaders_ObjectHttpConstant =
  _test_http_assertHeaders("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )(typia.http.createAssertHeaders<ObjectHttpConstant>());
