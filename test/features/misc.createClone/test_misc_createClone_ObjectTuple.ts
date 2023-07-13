import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_clone_ObjectTuple = _test_misc_clone(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.misc.createClone<ObjectTuple>(),
);
