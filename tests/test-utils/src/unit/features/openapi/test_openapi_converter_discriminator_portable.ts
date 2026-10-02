import { TestEquality } from "@typia/template/equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies authored nullable, anyOf and enum unions normalize without a
 * discriminator.
 *
 * The original three schemas and literal expected outputs move unchanged from
 * the native tagged-union interoperability peer.
 *
 */
export const test_openapi_converter_discriminator_portable = (): void => {
  TestEquality.equals(
    "nullable atomic union",
    clean(
      OpenApiConverter.upgradeSchema({
        components: {},
        schema: { type: "string", nullable: true },
      }),
    ),
    {
      oneOf: [{ type: "string" }, { type: "null" }],
    },
  );
  TestEquality.equals(
    "ordinary anyOf union",
    clean(
      OpenApiConverter.upgradeSchema({
        components: {},
        schema: { anyOf: [{ type: "string" }, { type: "number" }] },
      }),
    ),
    {
      oneOf: [{ type: "string" }, { type: "number" }],
    },
  );
  TestEquality.equals(
    "enum-derived union",
    clean(
      OpenApiConverter.upgradeSchema({
        components: {},
        schema: { type: "string", enum: ["alpha", "beta"] },
      }),
    ),
    {
      oneOf: [{ const: "alpha" }, { const: "beta" }],
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
