import typia from "typia";

import { _test_http_validateHeaders } from "../../internal/_test_http_validateHeaders";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_createValidateHeaders_ObjectHttpUndefindable =
  (): void =>
    _test_http_validateHeaders(
      "ObjectHttpUndefindable",
    )<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
      typia.http.createValidateHeaders<ObjectHttpUndefindable>(),
    );
