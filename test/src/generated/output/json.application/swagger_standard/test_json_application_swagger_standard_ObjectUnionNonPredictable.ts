import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionNonPredictable } from "../../../../structures/ObjectUnionNonPredictable";

export const test_json_application_swagger_standard_ObjectUnionNonPredictable =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectUnionNonPredictable",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionNonPredictable",
      },
    ],
    components: {
      schemas: {
        ObjectUnionNonPredictable: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrapperObjectUnionNonPredictable.IUnion",
              },
            },
          },
          nullable: false,
          required: ["value"],
        },
        "ObjectUnionNonPredictable.IWrapperObjectUnionNonPredictable.IUnion": {
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/IPointerObjectUnionNonPredictable.IUnion",
            },
          },
          nullable: false,
          required: ["value"],
        },
        "IPointerObjectUnionNonPredictable.IUnion": {
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/ObjectUnionNonPredictable.IUnion",
            },
          },
          nullable: false,
          required: ["value"],
        },
        "ObjectUnionNonPredictable.IUnion": {
          oneOf: [
            {
              $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrapperboolean",
            },
            {
              $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrappernumber",
            },
            {
              $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrapperstring",
            },
          ],
        },
        "ObjectUnionNonPredictable.IWrapperboolean": {
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/IPointerboolean",
            },
          },
          nullable: false,
          required: ["value"],
        },
        IPointerboolean: {
          type: "object",
          properties: {
            value: {
              type: "boolean",
            },
          },
          nullable: false,
          required: ["value"],
        },
        "ObjectUnionNonPredictable.IWrappernumber": {
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/IPointernumber",
            },
          },
          nullable: false,
          required: ["value"],
        },
        IPointernumber: {
          type: "object",
          properties: {
            value: {
              type: "number",
            },
          },
          nullable: false,
          required: ["value"],
        },
        "ObjectUnionNonPredictable.IWrapperstring": {
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/IPointerstring",
            },
          },
          nullable: false,
          required: ["value"],
        },
        IPointerstring: {
          type: "object",
          properties: {
            value: {
              type: "string",
            },
          },
          nullable: false,
          required: ["value"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
