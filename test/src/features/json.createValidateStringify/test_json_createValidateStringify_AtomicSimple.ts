import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_createValidateStringify_AtomicSimple =
  _test_json_validateStringify("AtomicSimple")<AtomicSimple>(AtomicSimple)(
    typia.json.createValidateStringify<AtomicSimple>(),
  );
