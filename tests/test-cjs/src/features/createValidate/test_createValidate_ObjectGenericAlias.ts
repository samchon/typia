import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createValidate_ObjectGenericAlias = (): void =>
  _test_validate("ObjectGenericAlias")<ObjectGenericAlias>(ObjectGenericAlias)(
    typia.createValidate<ObjectGenericAlias>(),
  );
