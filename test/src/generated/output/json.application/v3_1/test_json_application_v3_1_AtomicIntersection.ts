import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicIntersection } from "../../../../structures/AtomicIntersection";

export const test_json_application_v3_1_AtomicIntersection =
  _test_json_application({
    version: "3.1",
    name: "AtomicIntersection",
  })({
    version: "3.1",
    components: {
      schemas: {
        AtomicIntersection: {
          type: "array",
          prefixItems: [
            {
              $ref: "#/components/schemas/AtomicIntersection.Wrapperboolean",
            },
            {
              $ref: "#/components/schemas/AtomicIntersection.Wrappernumber",
            },
            {
              $ref: "#/components/schemas/AtomicIntersection.Wrapperstring",
            },
          ],
          additionalItems: {
            $ref: "#/components/schemas/AtomicIntersection.Wrapperstring",
          },
        },
        "AtomicIntersection.Wrapperboolean": {
          type: "boolean",
        },
        "AtomicIntersection.Wrappernumber": {
          type: "number",
        },
        "AtomicIntersection.Wrapperstring": {
          type: "string",
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/AtomicIntersection",
      },
    ],
  });
