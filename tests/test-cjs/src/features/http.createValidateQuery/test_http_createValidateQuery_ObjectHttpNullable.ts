import typia from "typia";

import { _test_http_validateQuery } from "../../internal/_test_http_validateQuery";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_createValidateQuery_ObjectHttpNullable = (): void =>
  _test_http_validateQuery("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )(typia.http.createValidateQuery<ObjectHttpNullable>());
