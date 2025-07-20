import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_stringify_ObjectGenericAlias = (): void =>
  _test_json_stringify("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )((input) => typia.json.stringify<ObjectGenericAlias>(input));
