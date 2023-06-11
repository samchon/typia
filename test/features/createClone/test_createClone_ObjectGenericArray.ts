import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createClone_ObjectGenericArray = _test_clone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createClone<ObjectGenericArray>(),
);
