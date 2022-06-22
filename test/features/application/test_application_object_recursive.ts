import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_application } from "../application/_test_application";

export const test_application_object_recursive = _test_application(
    "recursive object",
    TSON.application<[ObjectRecursive]>(),
{schemas: [
        {
            $type: "oneOf",
            oneOf: [
                {
                    $type: "reference",
                    $ref: "#/components/schemas/ObjectRecursive.IDepartment"
                },
                {
                    $type: "reference",
                    $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable"
                }
            ]
        }
    ],
    components: {
        schemas: {
            "ObjectRecursive.IDepartment": {
                $id: "ObjectRecursive.IDepartment",
                $type: "object",
                type: "object",
                properties: {
                    parent: {
                        $type: "oneOf",
                        oneOf: [
                            {
                                $type: "reference",
                                $ref: "#/components/schemas/ObjectRecursive.IDepartment"
                            },
                            {
                                $type: "reference",
                                $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable"
                            }
                        ]
                    },
                    id: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    },
                    code: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    sequence: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    },
                    created_at: {
                        $type: "reference",
                        $ref: "#/components/schemas/ObjectRecursive.ITimestamp"
                    }
                },
                nullable: false,
                required: [
                    "parent",
                    "id",
                    "code",
                    "name",
                    "sequence",
                    "created_at"
                ]
            },
            "ObjectRecursive.IDepartment.Nullable": {
                $id: "ObjectRecursive.IDepartment.Nullable",
                $type: "object",
                type: "object",
                properties: {
                    parent: {
                        $type: "oneOf",
                        oneOf: [
                            {
                                $type: "reference",
                                $ref: "#/components/schemas/ObjectRecursive.IDepartment"
                            },
                            {
                                $type: "reference",
                                $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable"
                            }
                        ]
                    },
                    id: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    },
                    code: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    sequence: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    },
                    created_at: {
                        $type: "reference",
                        $ref: "#/components/schemas/ObjectRecursive.ITimestamp"
                    }
                },
                nullable: true,
                required: [
                    "parent",
                    "id",
                    "code",
                    "name",
                    "sequence",
                    "created_at"
                ]
            },
            "ObjectRecursive.ITimestamp": {
                $id: "ObjectRecursive.ITimestamp",
                $type: "object",
                type: "object",
                properties: {
                    time: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    },
                    zone: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "time",
                    "zone"
                ]
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);