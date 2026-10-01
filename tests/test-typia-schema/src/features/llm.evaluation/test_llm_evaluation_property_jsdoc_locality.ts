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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.evaluation is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (direct; extracted). The case documents its purpose as: Verifies a property probability comment applies to that decision property.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: An indexed access extracts a property's type, not its JSDoc. A generic extraction therefore gets the ordinary boolean threshold unless its final evaluation property declares its own probability requirement. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (direct; extracted) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_evaluation_property_jsdoc_locality is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
