import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_stringify_ObjectGeneric = (): void =>
  _test_json_stringify("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)((input) =>
    typia.json.stringify<ObjectGeneric>(input),
  );
