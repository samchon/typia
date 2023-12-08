import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_json_assertStringify_ObjectGenericUnion =
  _test_json_assertStringify("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )((input) => typia.json.assertStringify<ObjectGenericUnion>(input));
