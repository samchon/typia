import TSON from "../../../../src";
import { FunctionalProperty } from "../../../structures/FunctionalProperty";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_FunctionalProperty = _test_application(
    "swagger",
)("FunctionalProperty", TSON.application<[FunctionalProperty], "swagger">(), {
    schemas: [
        {
            $ref: "#/components/schemas/FunctionalProperty",
        },
    ],
    components: {
        schemas: {
            FunctionalProperty: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["name"],
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
