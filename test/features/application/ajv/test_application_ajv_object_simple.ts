import TSON from "../../../../src";
import { ObjectSimple } from "../../../structures/ObjectSimple";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_object_simple = _test_application_ajv(
    "simple object",
    TSON.application<[ObjectSimple], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ObjectSimple.IBox3D",
            },
        ],
        components: {
            schemas: {
                "ObjectSimple.IBox3D": {
                    $id: "components#/schemas/ObjectSimple.IBox3D",
                    type: "object",
                    properties: {
                        scale: {
                            $ref: "components#/schemas/ObjectSimple.IPoint3D",
                        },
                        position: {
                            $ref: "components#/schemas/ObjectSimple.IPoint3D",
                        },
                        rotate: {
                            $ref: "components#/schemas/ObjectSimple.IPoint3D",
                        },
                        pivot: {
                            $ref: "components#/schemas/ObjectSimple.IPoint3D",
                        },
                    },
                    nullable: false,
                    required: ["scale", "position", "rotate", "pivot"],
                    "x-tson_jsDocTags": [],
                },
                "ObjectSimple.IPoint3D": {
                    $id: "components#/schemas/ObjectSimple.IPoint3D",
                    type: "object",
                    properties: {
                        x: {
                            type: "number",
                            nullable: false,
                        },
                        y: {
                            type: "number",
                            nullable: false,
                        },
                        z: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["x", "y", "z"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
