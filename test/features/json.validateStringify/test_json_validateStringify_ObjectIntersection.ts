import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_validateStringify_ObjectIntersection =
  _test_json_validateStringify("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )((input) => typia.json.validateStringify<ObjectIntersection>(input));
