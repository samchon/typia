import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_prune_ObjectLiteralType = (): void =>
  _test_misc_prune("ObjectLiteralType")<ObjectLiteralType>(ObjectLiteralType)(
    (input) => typia.misc.prune<ObjectLiteralType>(input),
  );
