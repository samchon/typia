import typia from "../../../../src";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectPropertyNullable = 
    _test_application("swagger")(
        "ObjectPropertyNullable",
        typia.application<[ObjectPropertyNullable], "swagger">(),
    );