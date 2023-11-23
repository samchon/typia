import typia from "typia";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_assertHeaders_ObjectHttpConstant =
  _test_http_assertHeaders("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )((input) => typia.http.assertHeaders<ObjectHttpConstant>(input));
