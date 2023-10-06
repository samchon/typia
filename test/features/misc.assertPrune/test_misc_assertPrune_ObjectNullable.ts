import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_assertPrune_ObjectNullable = _test_misc_assertPrune(
    "ObjectNullable",
)<ObjectNullable>(ObjectNullable)((input) =>
    typia.misc.assertPrune<ObjectNullable>(input),
);
