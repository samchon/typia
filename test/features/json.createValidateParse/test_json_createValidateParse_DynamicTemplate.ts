import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_createValidateParse_DynamicTemplate =
  _test_json_validateParse("DynamicTemplate")<DynamicTemplate>(DynamicTemplate)(
    typia.json.createValidateParse<DynamicTemplate>(),
  );
