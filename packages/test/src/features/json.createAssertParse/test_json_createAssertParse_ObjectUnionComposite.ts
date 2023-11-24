import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_createAssertParse_ObjectUnionComposite =
  _test_json_assertParse("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )(typia.json.createAssertParse<ObjectUnionComposite>());
