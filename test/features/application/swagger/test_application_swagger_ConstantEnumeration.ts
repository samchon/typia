import typia from "../../../../src";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ConstantEnumeration = _test_application(
    "swagger",
)(
    "ConstantEnumeration",
    typia.application<[ConstantEnumeration], "swagger">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            type: "number",
                            enum: [0, 1, 2],
                            nullable: false,
                        },
                        {
                            type: "string",
                            enum: ["Three", "Four"],
                            nullable: false,
                        },
                    ],
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {},
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
