import typia from "../../../../src";
import { TupleRestArray } from "../../../structures/TupleRestArray";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TupleRestArray = 
    _test_application("swagger")(
        "TupleRestArray",
        typia.application<[TupleRestArray], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "boolean",
                        nullable: false
                    },
                    {
                        type: "number",
                        nullable: false
                    },
                    {
                        type: "array",
                        items: {
                            type: "array",
                            items: {
                                type: "string",
                                nullable: false
                            },
                            nullable: false
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