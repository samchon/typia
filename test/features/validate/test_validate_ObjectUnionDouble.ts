import typia from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectUnionDouble = _test_validate(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.validate(input),
    ObjectUnionDouble.SPOILERS,
);