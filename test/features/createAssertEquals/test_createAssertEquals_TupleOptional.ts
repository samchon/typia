import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createAssertEquals_TupleOptional = _test_assertEquals(
    "TupleOptional",
)<TupleOptional>(TupleOptional)(typia.createAssertEquals<TupleOptional>());
