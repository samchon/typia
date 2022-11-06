import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_alias = _test_is_clone(
    "aliased object",
    ObjectAlias.generate,
    (input) => TSON.isClone(input),
    ObjectAlias.SPOILERS,
);
