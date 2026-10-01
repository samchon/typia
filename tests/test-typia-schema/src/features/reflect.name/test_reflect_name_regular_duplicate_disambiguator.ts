import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Foo as Alpha } from "../json.schema/ComponentNameCollisionAlpha";
import { Foo as Beta } from "../json.schema/ComponentNameCollisionBeta";
import { Foo as Gamma } from "../json.schema/ComponentNameCollisionGamma";

/**
 * Verifies a minted duplicate id is never a real type's qualified name.
 *
 * `typia.reflect.name<T, true>` reports the collection's allocated id, so it
 * shares the disambiguator with the OpenAPI and LLM key spaces and is the one
 * surface where that id is the product itself rather than a document key. The
 * disambiguator used to be joined with a dot, which is also the namespace
 * separator, so the id minted for a duplicate `Foo` was indistinguishable from
 * the real name of `namespace Foo { interface o1 }` — two different types
 * reported the same name.
 *
 * 1. Report the real qualified name of the namespace member.
 * 2. Report the regular name of a union of two identically named types.
 * 3. Assert the union names both members distinctly and that neither minted id
 *    collides with the real member's qualified name.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.reflect.name is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (a real namespace member reports its qualified name; both duplicates are named, and distinctly; the minted duplicate id never squats the real member's qualified name). The case documents its purpose as: Verifies a minted duplicate id is never a real type's qualified name.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: `typia.reflect.name<T, true>` reports the collection's allocated id, so it shares the disambiguator with the OpenAPI and LLM key spaces and is the one surface where that id is the product itself rather than a document key. The disambiguator used to be joined with a dot, which is also the namespace separator, so the id minted for a duplicate `Foo` was indistinguishable from the real name of `namespace Foo { interface o1 }` — two different types reported the same name. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (a real namespace member reports its qualified name; both duplicates are named, and distinctly; the minted duplicate id never squats the real member's qualified name) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_reflect_name_regular_duplicate_disambiguator is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_reflect_name_regular_duplicate_disambiguator = (): void => {
  // 1. THE REAL QUALIFIED NAME
  const real: string = typia.reflect.name<Gamma.o1, true>();
  TestEquality.equals(
    "a real namespace member reports its qualified name",
    "Foo.o1",
    real,
  );

  // 2. THE DUPLICATE ALLOCATION
  const duplicated: string = typia.reflect.name<Alpha | Beta, true>();

  // 3. THE MINTED ID IS NOT THE REAL NAME
  const members: string[] = duplicated.replace(/[()]/gu, "").split(" | ");
  TestEquality.equals(
    "both duplicates are named, and distinctly",
    2,
    new Set(members).size,
  );
  TestValidator.predicate(
    "the minted duplicate id never squats the real member's qualified name",
    () => members.includes(real) === false,
  );
};
