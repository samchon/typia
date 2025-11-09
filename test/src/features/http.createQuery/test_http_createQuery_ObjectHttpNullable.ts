import typia from "typia";

import { _test_http_query } from "../../internal/_test_http_query";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_createQuery_ObjectHttpNullable = (): void =>
  _test_http_query("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )(typia.http.createQuery<ObjectHttpNullable>());
