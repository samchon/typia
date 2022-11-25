import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectUnionDouble = _test_validate(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    TSON.createValidate<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
