import TSON from "../../../../src";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TupleHierarchical = _test_application("ajv")(
    "TupleHierarchical",
    TSON.application<[TupleHierarchical], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: [
                    {
                        type: "boolean",
                        nullable: false,
                    },
                    {},
                    {
                        type: "number",
                        nullable: false,
                    },
                    {
                        type: "array",
                        items: [
                            {
                                type: "boolean",
                                nullable: false,
                            },
                            {
                                type: "null",
                            },
                            {
                                type: "array",
                                items: [
                                    {
                                        type: "number",
                                        nullable: false,
                                    },
                                    {
                                        type: "array",
                                        items: [
                                            {
                                                type: "boolean",
                                                nullable: false,
                                            },
                                            {
                                                type: "string",
                                                nullable: false,
                                            },
                                        ],
                                        nullable: false,
                                    },
                                ],
                                nullable: false,
                            },
                        ],
                        nullable: false,
                    },
                    {
                        type: "array",
                        items: [
                            {
                                type: "number",
                                nullable: false,
                            },
                            {
                                type: "array",
                                items: {
                                    type: "array",
                                    items: [
                                        {
                                            type: "string",
                                            nullable: false,
                                        },
                                        {
                                            type: "boolean",
                                            nullable: false,
                                        },
                                        {
                                            type: "array",
                                            items: {
                                                type: "array",
                                                items: [
                                                    {
                                                        type: "number",
                                                        nullable: false,
                                                    },
                                                    {
                                                        type: "number",
                                                        nullable: false,
                                                    },
                                                    {
                                                        type: "array",
                                                        items: [
                                                            {
                                                                type: "boolean",
                                                                nullable: false,
                                                            },
                                                            {
                                                                type: "string",
                                                                nullable: false,
                                                            },
                                                        ],
                                                        nullable: false,
                                                    },
                                                ],
                                                nullable: false,
                                            },
                                            nullable: false,
                                        },
                                    ],
                                    nullable: false,
                                },
                                nullable: false,
                            },
                        ],
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
