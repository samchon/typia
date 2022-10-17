import TSON from "../../../../src";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_array_alias = _test_application_ajv(
    "atomic alias array",
    TSON.application<[ArrayAtomicAlias], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: [
                    {
                        type: "array",
                        items: {
                            type: "boolean",
                            nullable: false,
                        },
                        nullable: false,
                    },
                    {
                        type: "array",
                        items: {
                            type: "number",
                            nullable: false,
                        },
                        nullable: false,
                    },
                    {
                        type: "array",
                        items: {
                            type: "string",
                            nullable: false,
                        },
                        nullable: false,
                    },
                ],
                nullable: false,
            },
        ],
        components: {
            schemas: {},
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
