import typia from "typia"
import { ArrayAny } from "../../../structures/ArrayAny";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ArrayAny = 
    _test_application("swagger")(
        "ArrayAny",
        typia.application<[ArrayAny], "swagger">(),
    );