import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_json_createAssertStringifyCustom_ObjectUnionDouble =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ObjectUnionDouble",
    )<ObjectUnionDouble>(ObjectUnionDouble)(
      typia.json.createAssertStringify<ObjectUnionDouble>(
        (p) => new CustomGuardError(p),
      ),
    );
