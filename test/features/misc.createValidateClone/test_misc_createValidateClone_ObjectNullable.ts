import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_validateClone_ObjectNullable = _test_misc_validateClone(
    "ObjectNullable",
)<ObjectNullable>(ObjectNullable)(
    typia.misc.createValidateClone<ObjectNullable>(),
);
