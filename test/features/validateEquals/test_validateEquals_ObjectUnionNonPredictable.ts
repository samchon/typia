import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_validateEquals_ObjectUnionNonPredictable =
  _test_validateEquals("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable,
  )((input) => typia.validateEquals<ObjectUnionNonPredictable>(input));
