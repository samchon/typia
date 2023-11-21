import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_createIsStringify_TypeTagPattern =
  _test_json_isStringify("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)(
    typia.json.createIsStringify<TypeTagPattern>(),
  );
