import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_json_application_ajv_ObjectUnionNonPredictable =
  _test_json_application("ajv")("ObjectUnionNonPredictable")(
    typia.json.application<[ObjectUnionNonPredictable], "ajv">(),
  );
