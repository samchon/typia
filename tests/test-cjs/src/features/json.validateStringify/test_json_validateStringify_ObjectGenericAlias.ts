import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_validateStringify_ObjectGenericAlias = (): void =>
  _test_json_validateStringify("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )((input) => typia.json.validateStringify<ObjectGenericAlias>(input));
