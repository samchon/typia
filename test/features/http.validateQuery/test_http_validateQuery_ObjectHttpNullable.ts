import typia from "../../../src";
import { _test_http_validateQuery } from "../../internal/_test_http_validateQuery";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_validateQuery_ObjectHttpNullable =
  _test_http_validateQuery("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )((input) => typia.http.validateQuery<ObjectHttpNullable>(input));
