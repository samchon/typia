import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_assertStringifyCustom_ObjectUnionComposite = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "ObjectUnionComposite",
  )<ObjectUnionComposite>(ObjectUnionComposite)((input) =>
    typia.json.assertStringify<ObjectUnionComposite>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
