import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_assert_ObjectNullable = _test_assert(
    "ObjectNullable",
)<ObjectNullable>(ObjectNullable)((input) =>
    typia.assert<ObjectNullable>(input),
);
