import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_assertClone_ObjectOptional = _test_assertClone(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.assertClone<ObjectOptional>(input),
    ObjectOptional.SPOILERS,
);
