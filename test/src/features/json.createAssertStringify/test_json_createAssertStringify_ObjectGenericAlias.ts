import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_createAssertStringify_ObjectGenericAlias = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)(
    typia.json.createAssertStringify<ObjectGenericAlias>(),
  );
