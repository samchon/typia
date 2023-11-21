import typia from "../../../src";
import { _test_http_isQuery } from "../../internal/_test_http_isQuery";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_isQuery_ObjectHttpNullable = _test_http_isQuery(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
  typia.http.isQuery<ObjectHttpNullable>(input),
);
