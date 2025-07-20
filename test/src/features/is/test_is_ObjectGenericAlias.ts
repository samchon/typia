import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_is_ObjectGenericAlias = (): void =>
  _test_is("ObjectGenericAlias")<ObjectGenericAlias>(ObjectGenericAlias)(
    (input) => typia.is<ObjectGenericAlias>(input),
  );
