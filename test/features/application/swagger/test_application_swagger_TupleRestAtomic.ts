import typia from "../../../../src";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TupleRestAtomic = 
    _test_application("swagger")(
        "TupleRestAtomic",
        typia.application<[TupleRestAtomic], "swagger">(),
    );