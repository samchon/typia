import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_json_assertParse_ObjectUnionExplicitPointer = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)((input) =>
    typia.json.assertParse<ObjectUnionExplicitPointer>(input),
  );
