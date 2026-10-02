import { TestEquality } from "@typia/template/equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies authored nullable, anyOf and enum unions normalize without a
 * discriminator.
 *
 * The original three schemas and literal expected outputs move unchanged from
 * the native tagged-union interoperability peer.
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiConverter.upgradeSchema converts the three original authored schemas, and each cleaned output is compared with its literal expected union.
 * @evidence contracts/testing.md#independent-expectations Nullable string adds a null branch, anyOf retains string and number branches, and two enum literals become two const branches; none of the inputs carries a discriminator.
 * @evidence contracts/testing.md#distinguishing-cases Nullable, ordinary anyOf and enum-derived unions distinguish three synthesis paths. The native discriminator peer retains emitted tagged, nested, rewritten, collapsed and version-specific controls.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:unit entry registers this case under plugin-free tsconfig.unit.json; all schema conversion runs in process without a native producer.
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
