import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_isStringify_ConstantIntersection =
  _test_json_isStringify("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )((input) => typia.json.isStringify<ConstantIntersection>(input));
