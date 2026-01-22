import typia from "typia";

import { _test_http_isQuery } from "../../internal/_test_http_isQuery";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_isQuery_ObjectHttpUndefindable = (): void =>
  _test_http_isQuery("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )((input) => typia.http.isQuery<ObjectHttpUndefindable>(input));
