import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_json_application_ajv_ObjectUnionCompositePointer =
  _test_json_application("ajv")("ObjectUnionCompositePointer")(
    typia.json.application<[ObjectUnionCompositePointer], "ajv">(),
  );
