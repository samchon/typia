import typia from "../../../../src";
import { MapUnion } from "../../../structures/MapUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_MapUnion = 
    _test_application("ajv")(
        "MapUnion",
        typia.application<[MapUnion], "ajv">(),{schemas: [
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
                $id: "components#/schemas/Map",
                properties: {},
                nullable: false
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);