import typia from "../../../../src";
import { TupleRestObject } from "../../../structures/TupleRestObject";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TupleRestObject = _test_application("ajv")(
    "TupleRestObject",
    typia.application<[TupleRestObject], "ajv">(),
);
