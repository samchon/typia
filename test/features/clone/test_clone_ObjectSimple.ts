import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectSimple = _test_clone(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.clone(input),
);
