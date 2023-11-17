import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_json_createAssertParse_ObjectPartialAndRequired =
  _test_json_assertParse("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
    ObjectPartialAndRequired,
  )(typia.json.createAssertParse<ObjectPartialAndRequired>());
