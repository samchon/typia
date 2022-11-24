import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_object_union_double = _test_validate(
    "double union object",
    ObjectUnionDouble.generate,
    TSON.createValidate<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
