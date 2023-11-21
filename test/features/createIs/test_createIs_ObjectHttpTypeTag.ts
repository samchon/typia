import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_createIs_ObjectHttpTypeTag = _test_is(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)(typia.createIs<ObjectHttpTypeTag>());
