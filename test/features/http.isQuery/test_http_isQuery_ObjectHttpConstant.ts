import typia from "../../../src";
import { _test_http_isQuery } from "../../internal/_test_http_isQuery";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_isQuery_ObjectHttpConstant = _test_http_isQuery(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  typia.http.isQuery<ObjectHttpConstant>(input),
);
