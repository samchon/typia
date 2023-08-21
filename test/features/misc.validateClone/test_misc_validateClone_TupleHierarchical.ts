import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_validateClone_TupleHierarchical =
    _test_misc_validateClone("TupleHierarchical")<TupleHierarchical>(
        TupleHierarchical,
    )((input) => typia.misc.validateClone<TupleHierarchical>(input));
