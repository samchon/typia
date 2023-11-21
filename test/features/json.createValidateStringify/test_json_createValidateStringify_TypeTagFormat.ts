import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_json_createValidateStringify_TypeTagFormat =
  _test_json_validateStringify("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)(
    typia.json.createValidateStringify<TypeTagFormat>(),
  );
