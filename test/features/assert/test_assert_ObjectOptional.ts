import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_assert_ObjectOptional = _test_assert(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.assert<ObjectOptional>(input),
    ObjectOptional.SPOILERS,
);
