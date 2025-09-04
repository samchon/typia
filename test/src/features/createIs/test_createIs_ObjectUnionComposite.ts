import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createIs_ObjectUnionComposite = (): void =>
  _test_is("ObjectUnionComposite")<ObjectUnionComposite>(ObjectUnionComposite)(
    typia.createIs<ObjectUnionComposite>(),
  );
