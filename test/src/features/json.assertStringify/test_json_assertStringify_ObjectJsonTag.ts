import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_assertStringify_ObjectJsonTag =
  _test_json_assertStringify(TypeGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )((input) => typia.json.assertStringify<ObjectJsonTag>(input));
