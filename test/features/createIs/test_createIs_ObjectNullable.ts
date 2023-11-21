import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createIs_ObjectNullable = _test_is(
  "ObjectNullable",
)<ObjectNullable>(ObjectNullable)(typia.createIs<ObjectNullable>());
