import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_prune_ObjectLiteralProperty = _test_misc_prune(
  "ObjectLiteralProperty",
)<ObjectLiteralProperty>(ObjectLiteralProperty)((input) =>
  typia.misc.prune<ObjectLiteralProperty>(input),
);
