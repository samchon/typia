import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_validateStringify_UltimateUnion =
  _test_json_validateStringify("UltimateUnion")<UltimateUnion>(UltimateUnion)(
    (input) => typia.json.validateStringify<UltimateUnion>(input),
  );
