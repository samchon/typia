import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_createValidateParse_TypeTagType =
  _test_json_validateParse("TypeTagType")<TypeTagType>(TypeTagType)(
    typia.json.createValidateParse<TypeTagType>(),
  );
