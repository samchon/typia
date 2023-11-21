import typia from "../../../src";
import { _test_http_isQuery } from "../../internal/_test_http_isQuery";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_isQuery_ObjectHttpArray = _test_http_isQuery(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)((input) =>
  typia.http.isQuery<ObjectHttpArray>(input),
);
