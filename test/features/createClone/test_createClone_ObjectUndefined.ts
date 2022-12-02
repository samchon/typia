import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectUndefined = _test_clone(
    "ObjectUndefined",
    ObjectUndefined.generate,
    TSON.createClone<ObjectUndefined>(),
);
