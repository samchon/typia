import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { Escaper } from "../../utils/Escaper";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporeter";

/**
 * @internal
 */
export const feature_object_entries =
    <Output extends ts.ConciseBody>(
        config: Pick<
            FeatureProgrammer.IConfig<Output>,
            "decoder" | "path" | "trace"
        >,
    ) =>
    (importer: FunctionImporter) =>
    (obj: MetadataObject) =>
    (input: ts.Expression, from: "object" | "top" | "array" = "object") =>
        obj.properties.map((prop) => {
            const sole: string | null = prop.key.getSoleLiteral();
            const propInput =
                sole === null
                    ? ts.factory.createIdentifier("value")
                    : Escaper.variable(sole)
                    ? ts.factory.createPropertyAccessExpression(
                          input,
                          ts.factory.createIdentifier(sole),
                      )
                    : ts.factory.createElementAccessExpression(
                          input,
                          ts.factory.createStringLiteral(sole),
                      );

            return {
                input: propInput,
                key: prop.key,
                meta: prop.value,
                expression: config.decoder()(propInput, prop.value, {
                    tracable: config.path || config.trace,
                    source: "function",
                    from,
                    postfix: config.trace
                        ? sole !== null
                            ? IdentifierFactory.postfix(sole)
                            : (() => {
                                  importer.use("join");
                                  return `$join(key)`;
                              })()
                        : "",
                }),
            };
        });
