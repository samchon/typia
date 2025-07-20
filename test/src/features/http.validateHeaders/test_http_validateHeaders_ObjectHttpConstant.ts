import typia from "typia";

import { _test_http_validateHeaders } from "../../internal/_test_http_validateHeaders";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_validateHeaders_ObjectHttpConstant = (): void =>
  _test_http_validateHeaders("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )((input) => typia.http.validateHeaders<ObjectHttpConstant>(input));
