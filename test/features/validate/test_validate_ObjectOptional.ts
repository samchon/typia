import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_validate_ObjectOptional = _test_validate(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.validate(input),
    ObjectOptional.SPOILERS,
);
