import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_createValidateStringify_TypeTagMatrix =
  _test_json_validateStringify("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)(
    typia.json.createValidateStringify<TypeTagMatrix>(),
  );
