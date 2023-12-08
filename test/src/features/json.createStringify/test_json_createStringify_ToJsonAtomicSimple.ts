import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_json_createStringify_ToJsonAtomicSimple =
  _test_json_stringify("ToJsonAtomicSimple")<ToJsonAtomicSimple>(
    ToJsonAtomicSimple,
  )(typia.json.createStringify<ToJsonAtomicSimple>());
