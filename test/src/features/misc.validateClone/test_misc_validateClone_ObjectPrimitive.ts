import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_validateClone_ObjectPrimitive = (): void =>
  _test_misc_validateClone("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)(
    (input) => typia.misc.validateClone<ObjectPrimitive>(input),
  );
