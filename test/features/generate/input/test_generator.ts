import typia from "../../../../src";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

/* -----------------------------------------------------------
    VALIDATORS
----------------------------------------------------------- */
/**
 * Transformed {@link createAssert} function
 */
export const generate_assert = typia.createAssert<ObjectUnionExplicit>();

/**
 * Transformed {@link createIs} function
 */
export const generate_is = typia.createIs<ObjectUnionExplicit>();

/**
 * Transformed {@link createValidate} function
 */
export const generate_validate = typia.createValidate<ObjectUnionExplicit>();

/**
 * Transformed {@link createAssertEquals} function
 */
export const generate_assert_equals =
    typia.createAssertEquals<ObjectUnionExplicit>();

/**
 * Transformed {@link createIsEquals} function
 */
export const generate_equals = typia.createEquals<ObjectUnionExplicit>();

/**
 * Transformed {@link createValidateEquals} function
 */
export const generate_validate_equals =
    typia.createValidateEquals<ObjectUnionExplicit>();

/* -----------------------------------------------------------
    JSON FUNCTIONS
----------------------------------------------------------- */
/**
 * Transformed {@link application} (ajv) function
 */
export const generate_ajv_application = typia.application<
    [ObjectUnionExplicit],
    "ajv"
>();

/**
 * Transformed {@link application} (swagger) function
 */
export const generate_swagger_application = typia.application<
    [ObjectUnionExplicit],
    "swagger"
>();

/**
 * Transformed {@link createAssertParse} function
 */
export const generate_assert_parse =
    typia.createAssertParse<ObjectUnionExplicit>();

/**
 * Transformed {@link createIsParse} function
 */
export const generate_is_parse = typia.createIsParse<ObjectUnionExplicit>();

/**
 * Transformed {@link createValidateParse} function
 */
export const generate_validate_parse =
    typia.createValidateParse<ObjectUnionExplicit>();

/**
 * Transformed {@link createStringify} function
 */
export const generate_stringify = typia.createStringify<ObjectUnionExplicit>();

/**
 * Transformed {@link createAssertStringify} function
 */
export const generate_assert_stringify =
    typia.createAssertStringify<ObjectUnionExplicit>();

/**
 * Transformed {@link createIsStringify} function
 */
export const generate_is_stringify =
    typia.createIsStringify<ObjectUnionExplicit>();

/**
 * Transformed {@link createValidateStringify} function
 */
export const generate_validate_stringify =
    typia.createValidateStringify<ObjectUnionExplicit>();

/* -----------------------------------------------------------
    MISCELLANEOUS
----------------------------------------------------------- */
/**
 * Transformed {@link createRandom} function
 */
export const generate_random = typia.createRandom<ObjectUnionExplicit>();

/**
 * Transformed {@link createClone} function
 */
export const generate_clone = typia.createClone<ObjectUnionExplicit>();

/**
 * Transformed {@link createAssertClone} function
 */
export const generate_assert_clone =
    typia.createAssertClone<ObjectUnionExplicit>();

/**
 * Transformed {@link createIsClone} function
 */
export const generate_is_clone = typia.createIsClone<ObjectUnionExplicit>();

/**
 * Transformed {@link createValidateClone} function
 */
export const generate_validate_clone =
    typia.createValidateClone<ObjectUnionExplicit>();

/**
 * Transformed {@link createPrune} function
 */
export const generate_prune = typia.createPrune<ObjectUnionExplicit>();

/**
 * Transformed {@link createAssertPrune} function
 */
export const generate_assert_prune =
    typia.createAssertPrune<ObjectUnionExplicit>();

/**
 * Transformed {@link createIsPrune} function
 */
export const generate_is_prune = typia.createIsPrune<ObjectUnionExplicit>();

/**
 * Transformed {@link createValidatePrune} function
 */
export const generate_validate_prune =
    typia.createValidatePrune<ObjectUnionExplicit>();
