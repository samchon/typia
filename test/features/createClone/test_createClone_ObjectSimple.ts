import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createClone_ObjectSimple = _test_clone(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createClone<ObjectSimple>(),
);
