import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_createAssertParse_TypeTagDefault =
  _test_json_assertParse("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)(
    typia.json.createAssertParse<TypeTagDefault>(),
  );
