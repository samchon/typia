import TSON from "../../../../src";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ToJsonAtomicUnion = _test_application("ajv")(
    "ToJsonAtomicUnion",
    TSON.application<[ToJsonAtomicUnion], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            type: "string",
                            nullable: true,
                        },
                        {
                            type: "number",
                            nullable: true,
                        },
                        {
                            type: "boolean",
                            nullable: true,
                        },
                    ],
                },
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
