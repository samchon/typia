import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_generic_alias = _test_is_clone(
    "generic aliased object",
    ObjectGenericAlias.generate,
    (input) => TSON.isClone(input),
    ObjectGenericAlias.SPOILERS,
);
