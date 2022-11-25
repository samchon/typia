import TSON from "../../../../src";
import { MapUnion } from "../../../structures/MapUnion";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_map_union = _test_application_swagger(
    "union map",
    TSON.application<[MapUnion], "swagger">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/Map",
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                Map: {
                    type: "object",
                    properties: {},
                    nullable: false,
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
