import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_object_internal = _test_clone(
    "object internal",
    ObjectInternal.generate,
    TSON.createClone<ObjectInternal>(),
);
