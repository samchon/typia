import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_createIsStringify_AtomicSimple = (): void =>
  _test_json_isStringify("AtomicSimple")<AtomicSimple>(AtomicSimple)(
    typia.json.createIsStringify<AtomicSimple>(),
  );
