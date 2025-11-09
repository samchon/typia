import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_validateParse_ObjectGenericAlias = (): void =>
  _test_json_validateParse("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )((input) => typia.json.validateParse<ObjectGenericAlias>(input));
