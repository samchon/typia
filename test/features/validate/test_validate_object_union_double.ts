import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validate } from "./_test_validate";

export const test_validate_object_union_double = _test_validate(
    "double union object",
    ObjectUnionDouble.generate,
    (input) => TSON.validate(input),
    ObjectUnionDouble.SPOILERS,
);
