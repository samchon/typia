import typia from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectTuple = _test_clone(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.clone(input),
);