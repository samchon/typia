import typia from "../../../src";
import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_createAssertQuery_ObjectHttpNullable =
  _test_http_assertQuery("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )(typia.http.createAssertQuery<ObjectHttpNullable>());
