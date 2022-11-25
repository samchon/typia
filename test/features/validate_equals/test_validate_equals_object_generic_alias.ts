import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_object_generic_alias = _test_validate_equals(
    "generic aliased object",
    ObjectGenericAlias.generate,
    (input) => TSON.validateEquals(input),
);
