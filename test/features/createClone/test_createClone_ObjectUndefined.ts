import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createClone_ObjectUndefined = _test_clone(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createClone<ObjectUndefined>(),
);
