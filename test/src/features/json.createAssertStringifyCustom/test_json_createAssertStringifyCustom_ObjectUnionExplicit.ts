import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_createAssertStringifyCustom_ObjectUnionExplicit =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ObjectUnionExplicit",
    )<ObjectUnionExplicit>(ObjectUnionExplicit)(
      typia.json.createAssertStringify<ObjectUnionExplicit>(
        (p) => new CustomGuardError(p),
      ),
    );
