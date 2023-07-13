import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_clone_ObjectGenericArray = _test_misc_clone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.misc.createClone<ObjectGenericArray>(),
);
