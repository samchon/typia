import TSON from "../../../../src";
import { MapSimple } from "../../../structures/MapSimple";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_map_simple = _test_application_swagger(
    "simple map",
    TSON.application<[MapSimple], "swagger">(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/MapSimple",
            },
        ],
        components: {
            schemas: {
                MapSimple: {
                    type: "object",
                    properties: {
                        boolean: {
                            $ref: "#/components/schemas/Map",
                            "x-tson-required": true,
                        },
                        number: {
                            $ref: "#/components/schemas/Map",
                            "x-tson-required": true,
                        },
                        strings: {
                            $ref: "#/components/schemas/Map",
                            "x-tson-required": true,
                        },
                        arrays: {
                            $ref: "#/components/schemas/Map",
                            "x-tson-required": true,
                        },
                        objects: {
                            $ref: "#/components/schemas/Map",
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: [
                        "boolean",
                        "number",
                        "strings",
                        "arrays",
                        "objects",
                    ],
                    "x-tson_jsDocTags": [],
                },
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
