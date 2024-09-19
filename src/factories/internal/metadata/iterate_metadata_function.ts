import ts from "typescript";

import { FunctionalGeneralProgrammer } from "../../../programmers/functional/internal/FunctionalGeneralProgrammer";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataFunction } from "../../../schemas/metadata/MetadataFunction";
import { MetadataParameter } from "../../../schemas/metadata/MetadataParameter";

import { CommentFactory } from "../../CommentFactory";
import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { TypeFactory } from "../../TypeFactory";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_function =
  (checker: ts.TypeChecker) =>
  (options: MetadataFactory.IOptions) =>
  (collection: MetadataCollection) =>
  (errors: MetadataFactory.IError[]) =>
  (
    metadata: Metadata,
    type: ts.Type,
    explore: MetadataFactory.IExplore,
  ): boolean => {
    const declaration: ts.SignatureDeclaration | null =
      TypeFactory.getFunction(type);
    if (declaration === null) return false;
    else if (!options.functional) {
      if (metadata.functions.length === 0)
        metadata.functions.push(
          MetadataFunction.create({
            parameters: [],
            output: Metadata.initialize(),
            async: false,
          }),
        );
    } else {
      const [signature] = type.getCallSignatures();
      if (signature === undefined || signature.declaration === undefined)
        metadata.functions.push(
          MetadataFunction.create({
            parameters: [],
            output: Metadata.initialize(),
            async: false,
          }),
        );
      else {
        const { async }: FunctionalGeneralProgrammer.IOutput =
          FunctionalGeneralProgrammer.getReturnType(checker)(declaration);
        metadata.functions.push(
          MetadataFunction.create({
            parameters: signature.parameters.map((p) =>
              MetadataParameter.create({
                name: p.name,
                type: explore_metadata(checker)(options)(collection)(errors)(
                  checker.getTypeOfSymbol(p),
                  {
                    ...explore,
                    top: false,
                    parameter: p.name,
                  },
                ),
                description: CommentFactory.description(p) ?? null,
                jsDocTags: p?.getJsDocTags() ?? [],
              }),
            ),
            async,
            output: explore_metadata(checker)({
              ...options,
              functional: false,
            })(collection)(errors)(
              async
                ? (checker.getTypeArguments(
                    signature.getReturnType() as ts.TypeReference,
                  )?.[0] ??
                    checker.getTypeFromTypeNode(TypeFactory.keyword("any")))
                : signature.getReturnType(),
              {
                ...explore,
                top: false,
                output: true,
              },
            ),
          }),
        );
      }
    }
    return true;
  };
