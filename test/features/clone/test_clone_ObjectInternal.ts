import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectInternal = _test_clone(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.clone(input),
);