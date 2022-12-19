import typia from "../../../../src";
import { FunctionalArrayUnion } from "../../../structures/FunctionalArrayUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_FunctionalArrayUnion = 
    _test_application("swagger")(
        "FunctionalArrayUnion",
        typia.application<[FunctionalArrayUnion], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "array",
                        items: {
                            type: "string",
                            nullable: false
                        },
                        nullable: false
                    },
                    {
                        type: "array",
                        items: {
                            type: "number",
                            nullable: false
                        },
                        nullable: false
                    },
                    {
                        type: "array",
                        items: {},
                        nullable: false
                    },
                    {
                        type: "array",
                        items: {
                            type: "null"
                        },
                        nullable: false
                    }
                ]
            },
            nullable: false
        }
    ],
    components: {
        schemas: {}
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);