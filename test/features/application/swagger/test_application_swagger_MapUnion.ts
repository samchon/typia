import TSON from "../../../../src";
import { MapUnion } from "../../../structures/MapUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_MapUnion = 
    _test_application("swagger")(
        "MapUnion",
        TSON.application<[MapUnion], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/Map"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            Map: {
                type: "object",
                properties: {},
                nullable: false
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);