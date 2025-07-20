import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_is_ObjectAlias = (): void =>
  _test_is("ObjectAlias")<ObjectAlias>(ObjectAlias)((input) =>
    typia.is<ObjectAlias>(input),
  );
