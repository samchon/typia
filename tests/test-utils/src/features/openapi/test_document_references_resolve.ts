import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import {
  LlmSchemaConverter,
  OpenApiConverter,
  OpenApiTypeChecker,
  OpenApiValidator,
} from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../../TestGlobal";

/**
 * Verifies every schema reference in the real-world fixtures resolves, and
 * resolves alike for every reader of the document.
 *
 * A JSON Reference names its component by a JSON Pointer token, and documents
 * in the wild write keys the OpenAPI 3.x grammar does not allow, such as the
 * Semantic Scholar document's `Autocomplete Paper`. A reader that decodes more
 * strictly than RFC 6901, or less, loses such components silently: the walkers
 * treat an unresolved reference as a leaf and the downgraders skip its nullable
 * twin. The upgrade tests only assert the emended shape, so this is the check
 * that catches an unresolvable reference (#2412). The validator and the LLM
 * composers read the same document through a second reader that rejected a
 * space the walkers accepted, so the same reference resolved for one consumer
 * and was malformed for another (#2416).
 *
 * 1. Upgrade every fixture of every version.
 * 2. Walk each emended document's components, parameters, and bodies, and collect
 *    every schema reference the source defines that fails to escape to its
 *    component, or that the validator or the LLM converter reports as a
 *    reference failure.
 * 3. Assert the collections are empty, and that at least one fixture carried a key
 *    the URI-fragment charset forbids, so the check cannot pass on tidy inputs
 *    alone.
 */
export const test_document_references_resolve = async (): Promise<void> => {
  const unresolved: string[] = [];
  const rejected: string[] = [];
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
        if (FRAGMENT.test(key) === false) ++untidy;
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
            // the validator judges the value, never the reference itself, and
            // the LLM converter faults only a reference the document itself
            // cannot answer, such as one into another file
            const validated = OpenApiValidator.validate({
              components: document.components,
              schema: node,
              value: null,
              required: true,
            });
            const converted = LlmSchemaConverter.schema({
              components: document.components,
              schema: node,
              $defs: {},
            });
            if (
              (validated.success === false &&
                validated.errors.some((error) =>
                  REFERENCE.test(error.description ?? ""),
                )) ||
              (converted.success === false &&
                converted.error.reasons.some(
                  (reason) =>
                    reason.schema === node && REFERENCE.test(reason.message),
                ))
            )
              rejected.push(`${version}/${file} ${where} -> ${node.$ref}`);
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
          ) {
            const where: string = `${method.toUpperCase()} ${route}`;
            const typed: OpenApi.IOperation = operation as OpenApi.IOperation;
            for (const parameter of typed.parameters ?? [])
              check(parameter.schema, `${where} parameter ${parameter.name}`);
            for (const media of Object.values(typed.requestBody?.content ?? {}))
              if (media?.schema) check(media.schema, `${where} request body`);
            for (const [status, response] of Object.entries(
              typed.responses ?? {},
            ))
              for (const media of Object.values(response.content ?? {}))
                if (media?.schema)
                  check(media.schema, `${where} response ${status}`);
          }
    }
  }
  TestEquality.equals("unresolved references", [] as string[], unresolved);
  TestEquality.equals("rejected references", [] as string[], rejected);
  TestEquality.equals("fixtures with untidy keys", true, untidy > 0);
};

/**
 * The URI-fragment charset of RFC 3986, outside of which a JSON Reference
 * written as a URI fragment must percent-encode; a key beyond it is one the
 * stricter `$defs` reader refuses and real 2.0 documents write as is.
 */
const FRAGMENT: RegExp = /^[A-Za-z0-9._~!$&'()*+,;=:@?-]*$/;

/** A validator or composer failure about the reference rather than the value. */
const REFERENCE: RegExp = /schema reference/;
