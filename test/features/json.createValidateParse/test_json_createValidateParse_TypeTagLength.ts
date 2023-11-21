import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_createValidateParse_TypeTagLength =
  _test_json_validateParse("TypeTagLength")<TypeTagLength>(TypeTagLength)(
    typia.json.createValidateParse<TypeTagLength>(),
  );
