import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_isParse_ObjectUnionComposite = (): void =>
  _test_json_isParse("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )((input) => typia.json.isParse<ObjectUnionComposite>(input));
