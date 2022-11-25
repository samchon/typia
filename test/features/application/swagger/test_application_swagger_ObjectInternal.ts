import TSON from "../../../../src";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectInternal = _test_application(
    "swagger",
)("ObjectInternal", TSON.application<[ObjectInternal], "swagger">(), {
    schemas: [
        {
            $ref: "#/components/schemas/ObjectInternal",
        },
    ],
    components: {
        schemas: {
            ObjectInternal: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["id", "name"],
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
