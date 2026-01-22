import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_json_validateStringify_ObjectAlias = (): void =>
  _test_json_validateStringify("ObjectAlias")<ObjectAlias>(ObjectAlias)(
    (input) => typia.json.validateStringify<ObjectAlias>(input),
  );
