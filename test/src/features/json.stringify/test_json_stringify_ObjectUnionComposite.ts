import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_stringify_ObjectUnionComposite = (): void =>
  _test_json_stringify("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )((input) => typia.json.stringify<ObjectUnionComposite>(input));
