import ts from "typescript";

import { FunctionalGeneralProgrammer } from "../../../programmers/functional/internal/FunctionalGeneralProgrammer";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataFunction } from "../../../schemas/metadata/MetadataFunction";
import { MetadataParameter } from "../../../schemas/metadata/MetadataParameter";

import { CommentFactory } from "../../CommentFactory";
import { TypeFactory } from "../../TypeFactory";
import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_function = (
  props: IMetadataIteratorProps,
): boolean => {
  const declaration: ts.SignatureDeclaration | null = TypeFactory.getFunction(
    props.type,
  );
  if (declaration === null) return false;
  else if (!props.options.functional) {
    if (props.metadata.functions.length === 0)
      props.metadata.functions.push(
        MetadataFunction.create({
          parameters: [],
          output: Metadata.initialize(),
          async: false,
        }),
      );
  } else {
    const [signature] = props.type.getCallSignatures();
    if (signature === undefined || signature.declaration === undefined)
      props.metadata.functions.push(
        MetadataFunction.create({
          parameters: [],
          output: Metadata.initialize(),
          async: false,
        }),
      );
    else {
      const { async }: FunctionalGeneralProgrammer.IOutput =
        FunctionalGeneralProgrammer.getReturnType({
          checker: props.checker,
          declaration,
        });
      props.metadata.functions.push(
        MetadataFunction.create({
          parameters: signature.parameters.map((p) =>
            MetadataParameter.create({
              name: p.name,
              type: explore_metadata({
                ...props,
                type: props.checker.getTypeOfSymbol(p),
                explore: {
                  ...props.explore,
                  top: false,
                  parameter: p.name,
                },
                intersected: false,
              }),
              tsType: props.checker.getTypeOfSymbol(p),
              description: CommentFactory.description(p) ?? null,
              jsDocTags: p?.getJsDocTags() ?? [],
            }),
          ),
          async,
          output: explore_metadata({
            ...props,
            options: {
              ...props.options,
              functional: false,
            },
            type: async
              ? (props.checker.getTypeArguments(
                  signature.getReturnType() as ts.TypeReference,
                )?.[0] ??
                props.checker.getTypeFromTypeNode(TypeFactory.keyword("any")))
              : signature.getReturnType(),
            explore: {
              ...props.explore,
              top: false,
              output: true,
            },
            intersected: false,
          }),
        }),
      );
    }
  }
  return true;
};
