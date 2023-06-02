import typia from "typia"
import { TagCustom } from "../../../structures/TagCustom";
import { _test_application } from "../../../internal/_test_application";

export const test_application_swagger_TagCustom = 
    _test_application("swagger")(
        "TagCustom",
        typia.application<[TagCustom], "swagger">(),
    );