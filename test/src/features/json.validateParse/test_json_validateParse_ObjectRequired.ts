import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_validateParse_ObjectRequired = (): void =>
  _test_json_validateParse("ObjectRequired")<ObjectRequired>(ObjectRequired)(
    (input) => typia.json.validateParse<ObjectRequired>(input),
  );
