import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_validateStringify_TypeTagRange =
  _test_json_validateStringify("TypeTagRange")<TypeTagRange>(TypeTagRange)(
    (input) => typia.json.validateStringify<TypeTagRange>(input),
  );
