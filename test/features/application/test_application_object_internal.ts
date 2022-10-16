import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_application } from "./_test_application";

export const test_application_object_internal = _test_application(
    "internal object",
    TSON.application<[ObjectInternal]>(),
    {
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
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["id", "name"],
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
