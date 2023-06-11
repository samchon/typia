import typia from "typia"
import { ObjectSimple } from "../../../structures/ObjectSimple";
import { _test_application } from "../../../internal/_test_application";

export const test_application_swagger_ObjectSimple = 
    _test_application("swagger")(
        "ObjectSimple",
        typia.application<[ObjectSimple], "swagger">(),
    );