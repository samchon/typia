import typia from "typia";
import { ObjectUnionNonPredictable } from "../../../../structures/ObjectUnionNonPredictable";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_ObjectUnionNonPredictable =
  _test_json_application({
    purpose: "ajv",
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
          $id: "#/components/schemas/ObjectUnionNonPredictable",
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrapperObjectUnionNonPredictable.IUnion",
              },
            },
          },
          required: ["value"],
        },
        "ObjectUnionNonPredictable.IWrapperObjectUnionNonPredictable.IUnion": {
          $id: "#/components/schemas/ObjectUnionNonPredictable.IWrapperObjectUnionNonPredictable.IUnion",
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/IPointerObjectUnionNonPredictable.IUnion",
            },
          },
          required: ["value"],
        },
        "IPointerObjectUnionNonPredictable.IUnion": {
          $id: "#/components/schemas/IPointerObjectUnionNonPredictable.IUnion",
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/ObjectUnionNonPredictable.IUnion",
            },
          },
          required: ["value"],
        },
        "ObjectUnionNonPredictable.IUnion": {
          $id: "#/components/schemas/ObjectUnionNonPredictable.IUnion",
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
          $id: "#/components/schemas/ObjectUnionNonPredictable.IWrapperboolean",
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/IPointerboolean",
            },
          },
          required: ["value"],
        },
        IPointerboolean: {
          $id: "#/components/schemas/IPointerboolean",
          type: "object",
          properties: {
            value: {
              type: "boolean",
            },
          },
          required: ["value"],
        },
        "ObjectUnionNonPredictable.IWrappernumber": {
          $id: "#/components/schemas/ObjectUnionNonPredictable.IWrappernumber",
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/IPointernumber",
            },
          },
          required: ["value"],
        },
        IPointernumber: {
          $id: "#/components/schemas/IPointernumber",
          type: "object",
          properties: {
            value: {
              type: "number",
            },
          },
          required: ["value"],
        },
        "ObjectUnionNonPredictable.IWrapperstring": {
          $id: "#/components/schemas/ObjectUnionNonPredictable.IWrapperstring",
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/IPointerstring",
            },
          },
          required: ["value"],
        },
        IPointerstring: {
          $id: "#/components/schemas/IPointerstring",
          type: "object",
          properties: {
            value: {
              type: "string",
            },
          },
          required: ["value"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
