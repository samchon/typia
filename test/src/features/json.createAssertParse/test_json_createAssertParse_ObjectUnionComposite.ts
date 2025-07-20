import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_createAssertParse_ObjectUnionComposite = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "ObjectUnionComposite",
  )<ObjectUnionComposite>(ObjectUnionComposite)(
    typia.json.createAssertParse<ObjectUnionComposite>(),
  );
