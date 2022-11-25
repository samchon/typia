import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectAlias = _test_validate(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => TSON.validate(input),
    ObjectAlias.SPOILERS,
);