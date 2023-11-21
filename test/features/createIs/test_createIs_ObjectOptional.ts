import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createIs_ObjectOptional = _test_is(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)(typia.createIs<ObjectOptional>());
