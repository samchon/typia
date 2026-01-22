import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_createValidateParse_ObjectPrimitive = (): void =>
  _test_json_validateParse("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)(
    typia.json.createValidateParse<ObjectPrimitive>(),
  );
