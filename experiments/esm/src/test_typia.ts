import typia, {
  TypeGuardError,
  assert,
  is,
  json,
  random,
  tags,
  validate,
} from "typia";

import { check } from "./internal/asserts.js";

interface IMember {
  id: string & tags.Format<"uuid">;
  age: number & tags.Type<"int32"> & tags.Minimum<19>;
  code: string & tags.Pattern<"^[a-z]{3}[0-9]{2}$">;
}

/**
 * Drives the transformed typia validators through the published `.mjs`.
 *
 * The named-import line above is itself the headline assertion: the previous
 * CommonJS-transcoded build shipped an `index.mjs` whose only export was
 * `default`, so `import { assert } from "typia"` threw before any code ran. The
 * `Pattern` tag pulls the CJS `randexp` external through the ESM build, and
 * every generated validator resolves `typia/lib/internal/*` through the
 * `import` condition of the exports map.
 */
export const test_typia = (): void => {
  check("named and default import identity", typia.assert === assert);
  check("namespace export (json) is live", typia.json === json);
  check("tags namespace exists at runtime", typeof tags === "object");

  const member: IMember = random<IMember>();
  check("random obeys Pattern tag", /^[a-z]{3}[0-9]{2}$/.test(member.code));
  check("is accepts the generated value", is<IMember>(member) === true);
  check(
    "is rejects a broken value",
    is<IMember>({ ...member, age: 1.5 }) === false,
  );

  const validation = validate<IMember>({ ...member, id: "not-uuid" });
  check(
    "validate reports the failing path",
    validation.success === false &&
      validation.errors.some((error) => error.path === "$input.id"),
  );

  let caught: unknown = null;
  try {
    assert<IMember>({ ...member, age: 0 });
  } catch (error) {
    caught = error;
  }
  check("assert throws TypeGuardError", caught instanceof TypeGuardError);

  const restored: IMember = json.assertParse<IMember>(
    json.assertStringify<IMember>(member),
  );
  check("json serde round-trips", restored.id === member.id);
};
