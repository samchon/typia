import typia from "typia"
import { DynamicComposite } from "../../../structures/DynamicComposite";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicComposite = 
    _test_application("swagger")(
        "DynamicComposite",
        typia.application<[DynamicComposite], "swagger">(),
    );