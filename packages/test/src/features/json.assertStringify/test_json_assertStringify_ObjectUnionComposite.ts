import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_assertStringify_ObjectUnionComposite =
  _test_json_assertStringify("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )((input) => typia.json.assertStringify<ObjectUnionComposite>(input));
