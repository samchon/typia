import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_assertClone_ObjectGenericArray = _test_misc_assertClone(
    "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)((input) =>
    typia.misc.assertClone<ObjectGenericArray>(input),
);
