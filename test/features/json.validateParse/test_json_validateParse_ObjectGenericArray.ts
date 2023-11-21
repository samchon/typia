import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_validateParse_ObjectGenericArray =
  _test_json_validateParse("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )((input) => typia.json.validateParse<ObjectGenericArray>(input));
