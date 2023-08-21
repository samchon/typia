import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_clone_ObjectUnionDouble = _test_misc_clone(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)(
    typia.misc.createClone<ObjectUnionDouble>(),
);
