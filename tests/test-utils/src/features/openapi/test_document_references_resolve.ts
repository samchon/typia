import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiConverter, OpenApiTypeChecker } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../TestGlobal";

/**
 * Verifies every schema reference in the real-world fixtures resolves.
 *
 * A JSON Reference names its component by a JSON Pointer token, and documents
 * in the wild write keys the OpenAPI 3.x grammar does not allow, such as the
 * Semantic Scholar document's `Autocomplete Paper`. A reader that decodes more
 * strictly than RFC 6901, or less, loses such components silently: the walkers
 * treat an unresolved reference as a leaf and the downgraders skip its nullable
 * twin. The upgrade tests only assert the emended shape, so this is the check
 * that catches an unresolvable reference (#2412).
 *
 * 1. Upgrade every fixture of every version.
 * 2. Walk each emended document's components and operations, and collect every
 *    schema reference the source defines that fails to escape to its
 *    component.
 * 3. Assert the collection is empty, and that at least one fixture carried a key
 *    the 3.x grammar forbids, so the check cannot pass on tidy inputs alone.
 */
export const test_document_references_resolve = async (): Promise<void> => {
  const unresolved: string[] = [];
  let untidy: number = 0;
  for (const version of ["v2.0", "v3.0", "v3.1", "v3.2"]) {
    const directory: string = `${TestGlobal.ROOT}/examples/${version}`;
    for (const file of await fs.promises.readdir(directory)) {
      if (file.endsWith(".json") === false) continue;
      const source: {
        definitions?: Record<string, unknown>;
        components?: { schemas?: Record<string, unknown> };
      } = JSON.parse(
        await fs.promises.readFile(`${directory}/${file}`, "utf8"),
      );
      const document: OpenApi.IDocument = OpenApiConverter.upgradeDocument(
        source as any,
      );
      const schemas: Record<string, OpenApi.IJsonSchema> =
        document.components.schemas ?? {};
      for (const key of Object.keys(schemas))
        if (GRAMMAR.test(key) === false) ++untidy;
      // `visit` descends into a referenced component only after finding it by
      // the reference's decoded key, so a visit of a reference that the source
      // defines must reach more than the reference itself; recursion and alias
      // chains are the walker's own rules and do not affect that first step
      const defined: Set<string> = new Set(
        Object.keys(source.definitions ?? source.components?.schemas ?? {}),
      );
      const check = (schema: OpenApi.IJsonSchema, where: string): void =>
        OpenApiTypeChecker.visit({
          components: document.components,
          schema,
          closure: (node) => {
            if (
              OpenApiTypeChecker.isReference(node) === false ||
              node.$ref.startsWith("#/components/schemas/") === false ||
              defined.has(node.$ref.slice("#/components/schemas/".length)) ===
                false
            )
              return;
            let reached: number = 0;
            OpenApiTypeChecker.visit({
              components: document.components,
              schema: node,
              closure: () => ++reached,
            });
            if (reached < 2)
              unresolved.push(`${version}/${file} ${where} -> ${node.$ref}`);
          },
        });
      for (const [key, schema] of Object.entries(schemas))
        check(schema, `components.schemas[${JSON.stringify(key)}]`);
      for (const [route, item] of Object.entries(document.paths ?? {}))
        for (const [method, operation] of Object.entries(item))
          if (
            typeof operation === "object" &&
            operation &&
            "responses" in operation
          )
            for (const parameter of (operation as OpenApi.IOperation)
              .parameters ?? [])
              check(
                parameter.schema,
                `${method.toUpperCase()} ${route} parameter ${parameter.name}`,
              );
    }
  }
  TestEquality.equals("unresolved references", [] as string[], unresolved);
  TestEquality.equals("fixtures with untidy keys", true, untidy > 0);
};

/** The component-key grammar of OpenAPI 3.x, which real 2.0 documents ignore. */
const GRAMMAR: RegExp = /^[a-zA-Z0-9.\-_]+$/;
