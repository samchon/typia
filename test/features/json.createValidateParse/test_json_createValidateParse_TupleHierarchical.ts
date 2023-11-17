import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_createValidateParse_TupleHierarchical =
  _test_json_validateParse("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )(typia.json.createValidateParse<TupleHierarchical>());
