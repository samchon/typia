import TSON from "../../../../src";
import { Namespace } from "../../../structures/Namespace";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_namespace = _test_application_swagger(
    "namespace",
    TSON.application<[typeof Namespace], "swagger">(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/Namespace",
            },
        ],
        components: {
            schemas: {
                Namespace: {
                    type: "object",
                    properties: {},
                    nullable: false,
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
