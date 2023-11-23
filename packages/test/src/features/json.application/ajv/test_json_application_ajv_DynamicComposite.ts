import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_json_application_ajv_DynamicComposite =
  _test_json_application("ajv")("DynamicComposite")(
    typia.json.application<[DynamicComposite], "ajv">(),
  );
