import TSON from "../../../../src";
import { MapSimple } from "../../../structures/MapSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_MapSimple = _test_application("ajv")(
    "MapSimple",
    TSON.application<[MapSimple], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/MapSimple",
            },
        ],
        components: {
            schemas: {
                MapSimple: {
                    $id: "components#/schemas/MapSimple",
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
