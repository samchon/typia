import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_application } from "../application/_test_application";

export const test_application_object_recursive = _test_application(
    "recursive object",
    TSON.application<[ObjectRecursive]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/ObjectRecursive.IDepartment",
            },
        ],
        components: {
            schemas: {
                "ObjectRecursive.IDepartment": {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        parent: {
                            $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable",
                        },
                    },
                    nullable: false,
                    required: ["name", "parent"],
                },
                "ObjectRecursive.IDepartment.Nullable": {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        parent: {
                            $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable",
                        },
                    },
                    nullable: true,
                    required: ["name", "parent"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
