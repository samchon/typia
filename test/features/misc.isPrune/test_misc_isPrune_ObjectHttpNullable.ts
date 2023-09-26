import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_misc_isPrune_ObjectHttpNullable = _test_misc_isPrune(
    "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
    typia.misc.isPrune<ObjectHttpNullable>(input),
);
