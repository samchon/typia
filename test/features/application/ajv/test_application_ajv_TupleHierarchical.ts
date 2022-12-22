import typia from "../../../../src";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TupleHierarchical = _test_application("ajv")(
    "TupleHierarchical",
    typia.application<[TupleHierarchical], "ajv">(),
);
