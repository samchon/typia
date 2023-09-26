import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_createClone_ObjectNullable = _test_misc_clone(
    "ObjectNullable",
)<ObjectNullable>(ObjectNullable)(typia.misc.createClone<ObjectNullable>());
