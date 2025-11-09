import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_stringify_ObjectRequired = (): void =>
  _test_json_stringify("ObjectRequired")<ObjectRequired>(ObjectRequired)(
    (input) => typia.json.stringify<ObjectRequired>(input),
  );
