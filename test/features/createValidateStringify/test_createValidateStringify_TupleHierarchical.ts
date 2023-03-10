import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createValidateStringify_TupleHierarchical =
    _test_validateStringify(
        "TupleHierarchical",
        TupleHierarchical.generate,
        typia.createValidateStringify<TupleHierarchical>(),
        TupleHierarchical.SPOILERS,
    );
