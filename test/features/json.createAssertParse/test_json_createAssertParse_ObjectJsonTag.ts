import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_createAssertParse_ObjectJsonTag = _test_json_assertParse(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)(typia.json.createAssertParse<ObjectJsonTag>());
