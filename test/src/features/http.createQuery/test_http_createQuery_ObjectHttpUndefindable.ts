import typia from "typia";

import { _test_http_query } from "../../internal/_test_http_query";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_createQuery_ObjectHttpUndefindable = (): void =>
  _test_http_query("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )(typia.http.createQuery<ObjectHttpUndefindable>());
