import typia from "typia";

import type Stamp from "./classify_defmodel";
import type Note from "./classify_fcmodel";
import type { NS } from "./classify_nsmodel";

/**
 * @evidence contracts/testing.md#behavioral-verification Actual native producer reconstructs type-only namespace Point through from; the composite checks instanceof and sum3.
 * @evidence contracts/testing.md#independent-expectations Separately imported NS.Point and literal x1/y2 seed define identity/sum independently.
 * @evidence contracts/testing.md#distinguishing-cases Qualified constructor-type factory requires namespace runtime binding in this module.
 * @evidence contracts/testing.md#execution-ownership Invoked by test_native_plain_classify_cross_module_extra in the shared worker; assertions remain with that consumer.
 */
export const makePoint = typia.plain.createClassify<typeof NS.Point>();
/**
 * @evidence contracts/testing.md#behavioral-verification Actual native producer restores type-only namespace Model prototype; the composite checks instanceof and m4.
 * @evidence contracts/testing.md#independent-expectations Independent NS.Model import and literal id4 define expected identity/greeting.
 * @evidence contracts/testing.md#distinguishing-cases Namespace instance form requires qualified prototype binding rather than Point's static construction.
 * @evidence contracts/testing.md#execution-ownership Invoked by the extra cross-module composite; this producer has no independent test verdict.
 */
export const makeModel = typia.plain.createClassify<NS.Model>();
/**
 * @evidence contracts/testing.md#behavioral-verification Actual native producer resolves the type-only separate-default Stamp static factory; the composite checks identity/value7.
 * @evidence contracts/testing.md#independent-expectations Independently imported Stamp and literal value7 define expectations independently of this callback.
 * @evidence contracts/testing.md#distinguishing-cases Separate default statement must resolve a runtime default even without an inline default modifier on its class.
 * @evidence contracts/testing.md#execution-ownership Invoked by the extra cross-module composite in the shared worker; consumer assertions own success/failure.
 */
export const makeStamp = typia.plain.createClassify<typeof Stamp>();
/**
 * @evidence contracts/testing.md#behavioral-verification Actual native producer restores type-only separate-default Note prototype; the composite checks identity/show.
 * @evidence contracts/testing.md#independent-expectations Independent Note import and literal hi establish expected identity/text.
 * @evidence contracts/testing.md#distinguishing-cases Separate-default instance field copy contrasts with Stamp's static construction and inline default Memo.
 * @evidence contracts/testing.md#execution-ownership Invoked by the extra cross-module composite; this declaration supplies actual product behavior without substituting a verdict.
 */
export const makeNote = typia.plain.createClassify<Note>();
