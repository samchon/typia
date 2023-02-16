import typia from "typia"
import { MapAlias } from "../../../structures/MapAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_MapAlias = 
    _test_application("swagger")(
        "MapAlias",
        typia.application<[MapAlias], "swagger">(),
    );