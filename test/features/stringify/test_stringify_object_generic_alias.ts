import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_object_generic_alias = _test_stringify(
    "generic aliased object",
    ObjectGenericAlias.generate,
    (input) => TSON.stringify(input),
);
