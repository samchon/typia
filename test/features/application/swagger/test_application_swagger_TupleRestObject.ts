import typia from "typia"
import { TupleRestObject } from "../../../structures/TupleRestObject";
import { _test_application } from "../../../internal/_test_application";

export const test_application_swagger_TupleRestObject = 
    _test_application("swagger")(
        "TupleRestObject",
        typia.application<[TupleRestObject], "swagger">(),
    );