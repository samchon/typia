import typia from "../../../../src";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TupleRestAtomic = 
    _test_application("ajv")(
        "TupleRestAtomic",
        typia.application<[TupleRestAtomic], "ajv">(),
    );