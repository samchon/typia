import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_createClone_ObjectOptional = _test_misc_clone(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)(typia.misc.createClone<ObjectOptional>());
