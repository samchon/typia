import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_clone_ObjectInternal = _test_clone(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.clone(input),
);
