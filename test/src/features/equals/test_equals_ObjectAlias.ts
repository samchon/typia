import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_equals_ObjectAlias = (): void =>
  _test_equals("ObjectAlias")<ObjectAlias>(ObjectAlias)((input) =>
    typia.equals<ObjectAlias>(input),
  );
