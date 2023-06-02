import typia from "typia"
import { TagDefault } from "../../../structures/TagDefault";
import { _test_application } from "../../../internal/_test_application";

export const test_application_swagger_TagDefault = 
    _test_application("swagger")(
        "TagDefault",
        typia.application<[TagDefault], "swagger">(),
    );