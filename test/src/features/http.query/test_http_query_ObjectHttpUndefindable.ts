import typia from "typia";

import { _test_http_query } from "../../internal/_test_http_query";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_query_ObjectHttpUndefindable = (): void =>
  _test_http_query("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )((input) => typia.http.query<ObjectHttpUndefindable>(input));
