import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_createValidateClone_ObjectGeneric =
  _test_misc_validateClone("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
    typia.misc.createValidateClone<ObjectGeneric>(),
  );
