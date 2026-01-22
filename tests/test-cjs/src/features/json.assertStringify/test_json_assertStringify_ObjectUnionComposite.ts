import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_assertStringify_ObjectUnionComposite = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ObjectUnionComposite",
  )<ObjectUnionComposite>(ObjectUnionComposite)((input) =>
    typia.json.assertStringify<ObjectUnionComposite>(input),
  );
