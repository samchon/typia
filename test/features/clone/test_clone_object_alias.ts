import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_clone } from "./_test_clone";

export const test_clone_object_alias = _test_clone(
    "aliased object",
    ObjectAlias.generate,
    (input) => TSON.clone(input),
);
