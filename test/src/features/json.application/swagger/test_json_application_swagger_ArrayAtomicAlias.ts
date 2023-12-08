import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_json_application_swagger_ArrayAtomicAlias =
  _test_json_application("swagger")("ArrayAtomicAlias")(
    typia.json.application<[ArrayAtomicAlias], "swagger">(),
  );
