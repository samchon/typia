import typia from "typia"
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectGenericAlias = 
    _test_application("swagger")(
        "ObjectGenericAlias",
        typia.application<[ObjectGenericAlias], "swagger">(),
    );