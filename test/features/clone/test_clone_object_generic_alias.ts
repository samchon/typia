import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_clone } from "./_test_clone";

export const test_clone_object_generic_alias = _test_clone(
    "generic aliased object",
    ObjectGenericAlias.generate,
    (input) => TSON.clone(input),
);
