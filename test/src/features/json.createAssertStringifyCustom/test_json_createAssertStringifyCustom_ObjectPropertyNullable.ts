import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_createAssertStringifyCustom_ObjectPropertyNullable =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ObjectPropertyNullable",
    )<ObjectPropertyNullable>(ObjectPropertyNullable)(
      typia.json.createAssertStringify<ObjectPropertyNullable>(
        (p) => new CustomGuardError(p),
      ),
    );
