import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_createValidateClone_ObjectGenericArray =
  _test_misc_validateClone("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )(typia.misc.createValidateClone<ObjectGenericArray>());
