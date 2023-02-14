import typia from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectOptional = _test_assertClone(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.assertClone(input),
    ObjectOptional.SPOILERS,
);