import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_createIsStringify_UltimateUnion = (): void =>
  _test_json_isStringify("UltimateUnion")<UltimateUnion>(UltimateUnion)(
    typia.json.createIsStringify<UltimateUnion>(),
  );
