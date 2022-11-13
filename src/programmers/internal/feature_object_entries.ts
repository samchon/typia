import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { MetadataObject } from "../../metadata/MetadataObject";

import { Escaper } from "../../utils/Escaper";

import { FeatureProgrammer } from "../FeatureProgrammer";

export const feature_object_entries =
    (config: Pick<FeatureProgrammer.IConfig, "decoder" | "path" | "trace">) =>
    (obj: MetadataObject) =>
    (input: ts.Expression) =>
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
                expression: config.decoder(
                    propInput,
                    prop.value,
                    {
                        tracable: config.path || config.trace,
                        source: "object",
                        from: "object",
                        postfix:
                            sole !== null
                                ? IdentifierFactory.postfix(sole)
                                : `$join(key)`,
                    },
                    prop.tags,
                ),
            };
        });
