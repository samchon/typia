import TSON from "../../../../src";
import { MapUnion } from "../../../structures/MapUnion";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_map_union = _test_application_ajv(
    "union map",
    TSON.application<[MapUnion], "ajv">(),
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
                    $id: "components#/schemas/Map",
                    properties: {},
                    nullable: false,
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
