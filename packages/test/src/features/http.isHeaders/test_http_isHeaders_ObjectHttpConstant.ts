import typia from "typia";

import { _test_http_isHeaders } from "../../internal/_test_http_isHeaders";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_isHeaders_ObjectHttpConstant = _test_http_isHeaders(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  typia.http.isHeaders<ObjectHttpConstant>(input),
);
