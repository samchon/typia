import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_assertEquals_ObjectAlias = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectAlias")<ObjectAlias>(ObjectAlias)(
    (input) => typia.assertEquals<ObjectAlias>(input),
  );
