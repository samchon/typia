import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_createAssertClone_ObjectIntersection =
  _test_misc_assertClone("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )(typia.misc.createAssertClone<ObjectIntersection>());
