import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_createValidateParse_ObjectJsonTag = (): void =>
  _test_json_validateParse("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
    typia.json.createValidateParse<ObjectJsonTag>(),
  );
