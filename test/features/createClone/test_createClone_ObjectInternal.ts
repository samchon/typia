import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createClone_ObjectInternal = _test_clone(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createClone<ObjectInternal>(),
);
