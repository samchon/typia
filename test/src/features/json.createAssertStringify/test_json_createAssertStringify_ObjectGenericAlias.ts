import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ObjectGenericAlias =
  _test_json_assertStringify(TypeGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)(
    typia.json.createAssertStringify<ObjectGenericAlias>(),
  );
