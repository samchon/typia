import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_validateStringify_AtomicAlias =
  _test_json_validateStringify("AtomicAlias")<AtomicAlias>(AtomicAlias)(
    (input) => typia.json.validateStringify<AtomicAlias>(input),
  );
