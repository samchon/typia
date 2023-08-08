import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_misc_clone_ObjectInternal = _test_misc_clone(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.misc.createClone<ObjectInternal>(),
);
