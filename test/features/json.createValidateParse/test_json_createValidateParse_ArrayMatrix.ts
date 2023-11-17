import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_createValidateParse_ArrayMatrix =
  _test_json_validateParse("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
    typia.json.createValidateParse<ArrayMatrix>(),
  );
