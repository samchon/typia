import typia from "../../../../src";
import { SetSimple } from "../../../structures/SetSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_SetSimple = _test_application("swagger")(
    "SetSimple",
    typia.application<[SetSimple], "swagger">(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/SetSimple",
            },
        ],
        components: {
            schemas: {
                SetSimple: {
                    type: "object",
                    properties: {
                        booleans: {
                            $ref: "#/components/schemas/Set",
                            "x-typia-required": true,
                        },
                        numbers: {
                            $ref: "#/components/schemas/Set",
                            "x-typia-required": true,
                        },
                        strings: {
                            $ref: "#/components/schemas/Set",
                            "x-typia-required": true,
                        },
                        arrays: {
                            $ref: "#/components/schemas/Set",
                            "x-typia-required": true,
                        },
                        objects: {
                            $ref: "#/components/schemas/Set",
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: [
                        "booleans",
                        "numbers",
                        "strings",
                        "arrays",
                        "objects",
                    ],
                    "x-typia_jsDocTags": [],
                },
                Set: {
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
