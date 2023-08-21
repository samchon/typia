import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_misc_isClone_ObjectInternal = _test_misc_isClone(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)(typia.misc.createIsClone<ObjectInternal>());
