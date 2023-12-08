import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_isPrune_ObjectAlias = _test_misc_isPrune(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)((input) => typia.misc.isPrune<ObjectAlias>(input));
