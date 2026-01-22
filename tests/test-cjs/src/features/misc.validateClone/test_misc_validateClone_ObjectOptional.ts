import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_validateClone_ObjectOptional = (): void =>
  _test_misc_validateClone("ObjectOptional")<ObjectOptional>(ObjectOptional)(
    (input) => typia.misc.validateClone<ObjectOptional>(input),
  );
