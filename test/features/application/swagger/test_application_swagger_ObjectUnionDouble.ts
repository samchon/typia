import typia from "typia"
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectUnionDouble = 
    _test_application("swagger")(
        "ObjectUnionDouble",
        typia.application<[ObjectUnionDouble], "swagger">(),
    );