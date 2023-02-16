import typia from "typia"
import { TupleHierarchical } from "../../../structures/TupleHierarchical";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TupleHierarchical = 
    _test_application("swagger")(
        "TupleHierarchical",
        typia.application<[TupleHierarchical], "swagger">(),
    );