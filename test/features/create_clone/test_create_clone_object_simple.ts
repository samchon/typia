import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_object_simple = _test_clone(
    "simple object",
    ObjectSimple.generate,
    TSON.createClone<ObjectSimple>(),
);
