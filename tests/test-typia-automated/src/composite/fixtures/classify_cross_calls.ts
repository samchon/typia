import typia from "typia";

import type Memo from "./classify_model";
import type { Factory, Model } from "./classify_model";

/**
 * @evidence contracts/testing.md#behavioral-verification Actual native producer reconstructs the type-only named Model binding; the composite asserts constructor identity and greeting.
 * @evidence contracts/testing.md#independent-expectations Consumer independently imports Model and supplies literal id3/m3 expectations.
 * @evidence contracts/testing.md#distinguishing-cases Named instance-form type-only import must acquire a usable runtime prototype in this producer module.
 * @evidence contracts/testing.md#execution-ownership Invoked by test_native_plain_classify_cross_module in the shared worker; this declaration supplies the product callback without its own verdict.
 */
export const classifyModel = typia.plain.createClassify<Model>();
/**
 * @evidence contracts/testing.md#behavioral-verification Actual native producer resolves named Factory.from across a type-only import; the composite checks identity and value7.
 * @evidence contracts/testing.md#independent-expectations Independent runtime Factory import and authored literal7 seed establish expectations.
 * @evidence contracts/testing.md#distinguishing-cases Constructor-type static-factory form contrasts with neighboring instance field-copy callbacks.
 * @evidence contracts/testing.md#execution-ownership Invoked by the cross-module composite in the shared worker; this callback does not judge itself.
 */
export const classifyFactory = typia.plain.createClassify<typeof Factory>();
/**
 * @evidence contracts/testing.md#behavioral-verification Actual native producer reconstructs type-only default Memo; the composite checks default identity and show result.
 * @evidence contracts/testing.md#independent-expectations Independent Memo runtime import and literal hi define expected identity/content.
 * @evidence contracts/testing.md#distinguishing-cases Inline default-export instance form requires default value-import synthesis within this producer module.
 * @evidence contracts/testing.md#execution-ownership Invoked by the cross-module composite; actual runtime verdict remains with its independent assertions.
 */
export const classifyMemo = typia.plain.createClassify<Memo>();
