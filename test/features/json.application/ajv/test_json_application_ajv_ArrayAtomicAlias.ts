import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_json_application_ajv_ArrayAtomicAlias =
  _test_json_application("ajv")("ArrayAtomicAlias")(
    typia.json.application<[ArrayAtomicAlias], "ajv">(),
  );
