import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_object_alias = _test_validate(
    "aliased object",
    ObjectAlias.generate,
    (input) => TSON.validate(input),
    ObjectAlias.SPOILERS,
);
