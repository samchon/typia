import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createIs_ObjectPropertyNullable = _test_is(
  "ObjectPropertyNullable",
)<ObjectPropertyNullable>(ObjectPropertyNullable)(
  typia.createIs<ObjectPropertyNullable>(),
);
