import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_createValidateParse_TypeTagRange =
  _test_json_validateParse("TypeTagRange")<TypeTagRange>(TypeTagRange)(
    typia.json.createValidateParse<TypeTagRange>(),
  );
