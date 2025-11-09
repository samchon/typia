import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_json_createValidateParse_ObjectGenericUnion = (): void =>
  _test_json_validateParse("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )(typia.json.createValidateParse<ObjectGenericUnion>());
