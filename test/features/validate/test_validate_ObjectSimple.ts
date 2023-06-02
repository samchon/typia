import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_validate_ObjectSimple = _test_validate(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.validate(input),
    ObjectSimple.SPOILERS,
);
