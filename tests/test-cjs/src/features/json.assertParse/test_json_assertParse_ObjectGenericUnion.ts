import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_json_assertParse_ObjectGenericUnion = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)((input) =>
    typia.json.assertParse<ObjectGenericUnion>(input),
  );
