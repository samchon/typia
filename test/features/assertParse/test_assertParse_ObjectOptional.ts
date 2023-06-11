import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_assertParse_ObjectOptional = _test_assertParse(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.assertParse<ObjectOptional>(input),
    ObjectOptional.SPOILERS,
);
