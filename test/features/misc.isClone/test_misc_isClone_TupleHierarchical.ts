import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_isClone_TupleHierarchical =
    _test_misc_isClone<TupleHierarchical>(TupleHierarchical)((input) =>
        typia.misc.isClone<TupleHierarchical>(input),
    );
