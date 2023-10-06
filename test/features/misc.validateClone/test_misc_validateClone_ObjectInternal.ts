import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_misc_validateClone_ObjectInternal = _test_misc_validateClone(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)((input) =>
    typia.misc.validateClone<ObjectInternal>(input),
);
