import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_createValidateParse_AtomicAlias =
  _test_json_validateParse("AtomicAlias")<AtomicAlias>(AtomicAlias)(
    typia.json.createValidateParse<AtomicAlias>(),
  );
