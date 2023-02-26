import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_clone_ObjectUndefined = _test_clone(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.clone(input),
);
