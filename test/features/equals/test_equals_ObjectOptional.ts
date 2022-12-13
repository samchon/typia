import typia from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectOptional = _test_equals(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.equals(input),
);