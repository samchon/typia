import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createValidateEquals_ObjectGenericAlias = (): void =>
  _test_validateEquals("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )(typia.createValidateEquals<ObjectGenericAlias>());
