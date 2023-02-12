import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectSimple = _test_clone(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createClone<ObjectSimple>(),
);