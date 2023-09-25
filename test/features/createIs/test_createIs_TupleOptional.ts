import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createIs_TupleOptional = _test_is(
    "TupleOptional",
)<TupleOptional>(TupleOptional)(typia.createIs<TupleOptional>());
