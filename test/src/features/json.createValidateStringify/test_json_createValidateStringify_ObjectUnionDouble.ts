import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_json_createValidateStringify_ObjectUnionDouble = (): void =>
  _test_json_validateStringify("ObjectUnionDouble")<ObjectUnionDouble>(
    ObjectUnionDouble,
  )(typia.json.createValidateStringify<ObjectUnionDouble>());
