import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ObjectUnionComposite =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectUnionComposite",
  )<ObjectUnionComposite>(ObjectUnionComposite)(
    typia.json.createAssertStringify<ObjectUnionComposite>(
      (p) => new CustomGuardError(p),
    ),
  );
