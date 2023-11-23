import typia from "typia";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_createAssertHeaders_ObjectHttpTypeTag =
  _test_http_assertHeaders("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )(typia.http.createAssertHeaders<ObjectHttpTypeTag>());
