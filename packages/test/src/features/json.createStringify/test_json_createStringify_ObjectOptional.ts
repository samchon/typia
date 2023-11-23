import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_createStringify_ObjectOptional = _test_json_stringify(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)(typia.json.createStringify<ObjectOptional>());
