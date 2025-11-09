import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_createClone_TypeTagTuple = (): void =>
  _test_misc_clone("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)(
    typia.misc.createClone<TypeTagTuple>(),
  );
