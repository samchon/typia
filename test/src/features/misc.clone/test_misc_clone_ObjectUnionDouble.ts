import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_clone_ObjectUnionDouble = (): void =>
  _test_misc_clone("ObjectUnionDouble")<ObjectUnionDouble>(ObjectUnionDouble)(
    (input) => typia.misc.clone<ObjectUnionDouble>(input),
  );
