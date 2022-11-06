import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_clone } from "./_test_clone";

export const test_clone_object_internal = _test_clone(
    "object internal",
    ObjectInternal.generate,
    (input) => TSON.clone(input),
);
