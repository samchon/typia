import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createValidateEquals_TupleOptional = _test_validateEquals(
  "TupleOptional",
)<TupleOptional>(TupleOptional)(typia.createValidateEquals<TupleOptional>());
