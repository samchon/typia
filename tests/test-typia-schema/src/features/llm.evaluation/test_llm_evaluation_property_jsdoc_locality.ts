import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies a property probability comment applies to that decision property.
 *
 * An indexed access extracts a property's type, not its JSDoc. A generic
 * extraction therefore gets the ordinary boolean threshold unless its final
 * evaluation property declares its own probability requirement.
 *
 * 1. Evaluate a reusable interface whose property has `@probability`.
 * 2. Extract its boolean type through a generic indexed access.
 * 3. Check default and explicit thresholds on the resulting properties.
 */
export const test_llm_evaluation_property_jsdoc_locality = (): void => {
  const direct = typia.llm.evaluation<ISource>();
  const extracted = typia.llm.evaluation<IExtracted>();
  const directResult = direct.decode({
    urgent: { type: "boolean", probability: 0.6 },
  });
  const extractedResult = extracted.decode({
    defaulted: { type: "boolean", probability: 0.6 },
    explicit: { type: "boolean", probability: 0.6 },
  });
  if (!directResult.success || !extractedResult.success)
    throw new Error("unexpected failure");
  TestEquality.equals("direct", directResult.data, { urgent: false });
  TestEquality.equals("extracted", extractedResult.data, {
    defaulted: true,
    explicit: false,
  });
};

interface ISource {
  /** Is it urgent? @probability 0.8 */
  urgent: boolean;
}

type Select<T, K extends keyof T> = T[K];

interface IExtracted {
  /** Is the ordinary threshold met? */
  defaulted: Select<ISource, "urgent">;

  /** Is the stricter threshold met? @probability 0.8 */
  explicit: Select<ISource, "urgent">;
}
