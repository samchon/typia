import typia from "../../../../src";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ArrayAtomicSimple = _test_application("ajv")(
    "ArrayAtomicSimple",
    typia.application<[ArrayAtomicSimple], "ajv">(),
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
