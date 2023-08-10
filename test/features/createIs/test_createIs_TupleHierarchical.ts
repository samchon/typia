import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_is_TupleHierarchical = _test_is<TupleHierarchical>(
    TupleHierarchical,
)(typia.createIs<TupleHierarchical>());
