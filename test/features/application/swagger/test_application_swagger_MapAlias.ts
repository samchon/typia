import typia from "../../../../src";
import { MapAlias } from "../../../structures/MapAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_MapAlias = _test_application("swagger")(
    "MapAlias",
    typia.application<[MapAlias], "swagger">(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/MapAlias",
            },
        ],
        components: {
            schemas: {
                MapAlias: {
                    type: "object",
                    properties: {
                        boolean: {
                            $ref: "#/components/schemas/Map",
                            "x-typia-required": true,
                        },
                        number: {
                            $ref: "#/components/schemas/Map",
                            "x-typia-required": true,
                        },
                        strings: {
                            $ref: "#/components/schemas/Map",
                            "x-typia-required": true,
                        },
                        arrays: {
                            $ref: "#/components/schemas/Map",
                            "x-typia-required": true,
                        },
                        objects: {
                            $ref: "#/components/schemas/Map",
                            "x-typia-required": true,
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
                    "x-typia_jsDocTags": [],
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
