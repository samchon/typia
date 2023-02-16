import typia from "typia"
import { SetAlias } from "../../../structures/SetAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_SetAlias = 
    _test_application("swagger")(
        "SetAlias",
        typia.application<[SetAlias], "swagger">(),
    );