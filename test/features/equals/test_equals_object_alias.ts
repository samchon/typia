import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_equals } from "./_test_equals";

export const test_equals_object_alias = _test_equals(
    "aliased object",
    ObjectAlias.generate,
    (input) => TSON.equals(input),
);
