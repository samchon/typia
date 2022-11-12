import TSON from "../../../../src";
import { ObjectSimple } from "../../../structures/ObjectSimple";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_object_simple = _test_application_swagger(
    "simple object",
    TSON.application<[ObjectSimple], "swagger">(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/ObjectSimple.IBox3D",
            },
        ],
        components: {
            schemas: {
                "ObjectSimple.IBox3D": {
                    type: "object",
                    properties: {
                        scale: {
                            $ref: "#/components/schemas/ObjectSimple.IPoint3D",
                            "x-tson-required": true,
                        },
                        position: {
                            $ref: "#/components/schemas/ObjectSimple.IPoint3D",
                            "x-tson-required": true,
                        },
                        rotate: {
                            $ref: "#/components/schemas/ObjectSimple.IPoint3D",
                            "x-tson-required": true,
                        },
                        pivot: {
                            $ref: "#/components/schemas/ObjectSimple.IPoint3D",
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["scale", "position", "rotate", "pivot"],
                    "x-tson_jsDocTags": [],
                },
                "ObjectSimple.IPoint3D": {
                    type: "object",
                    properties: {
                        x: {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        y: {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        z: {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["x", "y", "z"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
