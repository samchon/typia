import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createEquals_ObjectUnionComposite = (): void =>
  _test_equals("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )(typia.createEquals<ObjectUnionComposite>());
