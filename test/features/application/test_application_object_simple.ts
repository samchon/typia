import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_application } from "./_test_application";

export const test_application_object = _test_application(
    "simple object",
    TSON.application<[ObjectSimple]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/ObjectSimple.IBox3D",
            },
        ],
        components: {
            schemas: {
                "ObjectSimple.IBox3D": {
                    $id: "ObjectSimple.IBox3D",
                    type: "object",
                    properties: {
                        scale: {
                            $ref: "#/components/schemas/ObjectSimple.IPoint3D",
                        },
                        position: {
                            $ref: "#/components/schemas/ObjectSimple.IPoint3D",
                        },
                        rotate: {
                            $ref: "#/components/schemas/ObjectSimple.IPoint3D",
                        },
                        pivot: {
                            $ref: "#/components/schemas/ObjectSimple.IPoint3D",
                        },
                    },
                    nullable: false,
                    required: [
                        "ObjectSimple.IBox3D",
                        "ObjectSimple.IBox3D",
                        "ObjectSimple.IBox3D",
                        "ObjectSimple.IBox3D",
                    ],
                },
                "ObjectSimple.IPoint3D": {
                    $id: "ObjectSimple.IPoint3D",
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
                    required: [
                        "ObjectSimple.IPoint3D",
                        "ObjectSimple.IPoint3D",
                        "ObjectSimple.IPoint3D",
                    ],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
