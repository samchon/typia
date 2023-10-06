import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createEquals_TupleOptional = _test_equals(
    "TupleOptional",
)<TupleOptional>(TupleOptional)(typia.createEquals<TupleOptional>());
