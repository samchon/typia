import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_json_createValidateStringify_ArrayRecursiveUnionImplicit =
  _test_json_validateStringify(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
    typia.json.createValidateStringify<ArrayRecursiveUnionImplicit>(),
  );
