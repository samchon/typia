import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_validate_ObjectTuple = _test_validate(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.validate(input),
    ObjectTuple.SPOILERS,
);
