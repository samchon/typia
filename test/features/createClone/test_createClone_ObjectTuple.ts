import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createClone_ObjectTuple = _test_clone(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createClone<ObjectTuple>(),
);
