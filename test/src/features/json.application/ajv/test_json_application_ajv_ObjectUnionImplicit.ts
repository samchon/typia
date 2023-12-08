import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_json_application_ajv_ObjectUnionImplicit =
  _test_json_application("ajv")("ObjectUnionImplicit")(
    typia.json.application<[ObjectUnionImplicit], "ajv">(),
  );
