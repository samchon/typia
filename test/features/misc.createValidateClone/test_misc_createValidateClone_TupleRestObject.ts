import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_createValidateClone_TupleRestObject =
  _test_misc_validateClone("TupleRestObject")<TupleRestObject>(TupleRestObject)(
    typia.misc.createValidateClone<TupleRestObject>(),
  );
