import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_validateParse_UltimateUnion = (): void =>
  _test_json_validateParse("UltimateUnion")<UltimateUnion>(UltimateUnion)(
    (input) => typia.json.validateParse<UltimateUnion>(input),
  );
