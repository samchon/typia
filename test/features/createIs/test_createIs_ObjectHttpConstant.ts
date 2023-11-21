import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_createIs_ObjectHttpConstant = _test_is(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)(typia.createIs<ObjectHttpConstant>());
