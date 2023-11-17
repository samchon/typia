import typia from "../../../src";
import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_assertQuery_ObjectHttpConstant = _test_http_assertQuery(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  typia.http.assertQuery<ObjectHttpConstant>(input),
);
