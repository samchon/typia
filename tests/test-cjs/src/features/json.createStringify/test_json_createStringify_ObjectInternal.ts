import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_createStringify_ObjectInternal = (): void =>
  _test_json_stringify("ObjectInternal")<ObjectInternal>(ObjectInternal)(
    typia.json.createStringify<ObjectInternal>(),
  );
