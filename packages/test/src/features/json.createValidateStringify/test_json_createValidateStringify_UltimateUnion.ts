import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_createValidateStringify_UltimateUnion =
  _test_json_validateStringify("UltimateUnion")<UltimateUnion>(UltimateUnion)(
    typia.json.createValidateStringify<UltimateUnion>(),
  );
