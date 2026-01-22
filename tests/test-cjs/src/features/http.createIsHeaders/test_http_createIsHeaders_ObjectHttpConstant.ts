import typia from "typia";

import { _test_http_isHeaders } from "../../internal/_test_http_isHeaders";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_createIsHeaders_ObjectHttpConstant = (): void =>
  _test_http_isHeaders("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )(typia.http.createIsHeaders<ObjectHttpConstant>());
