import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_equals_ObjectOptional = _test_equals(
    "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input) =>
    typia.equals<ObjectOptional>(input),
);
