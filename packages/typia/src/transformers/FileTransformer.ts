import ts from "typescript";

import { ImportProgrammer } from "../programmers/ImportProgrammer";

import { Singleton } from "../utils/Singleton";

import { ITypiaContext } from "./ITypiaContext";
import { NodeTransformer } from "./NodeTransformer";
import { TransformerError } from "./TransformerError";

export namespace FileTransformer {
  export const transform =
    (environments: Omit<ITypiaContext, "transformer" | "importer">) =>
    (transformer: ts.TransformationContext) =>
    (file: ts.SourceFile): ts.SourceFile => {
      if (file.isDeclarationFile) return file;

      const importer: ImportProgrammer = new ImportProgrammer({
        internalPrefix: "typia_transform_",
      });
      const context: ITypiaContext = {
        ...environments,
        transformer,
        importer,
      };
      checkJsDocParsingMode.get(context, file);

      file = ts.visitEachChild(
        file,
        (node) =>
          iterate_node({
            context,
            node,
          }),
        transformer,
      );
      const index: number = find_import_injection_index(file);
      return ts.factory.updateSourceFile(
        file,
        [
          ...file.statements.slice(0, index),
          ...importer.toStatements(),
          ...file.statements.slice(index),
        ],
        false,
        file.referencedFiles,
        file.typeReferenceDirectives,
        file.hasNoDefaultLib,
        file.libReferenceDirectives,
      );
    };

  const iterate_node = (props: {
    context: ITypiaContext;
    node: ts.Node;
  }): ts.Node =>
    ts.visitEachChild(
      try_transform_node(props) ?? props.node,
      (node) =>
        iterate_node({
          context: props.context,
          node,
        }),
      props.context.transformer,
    );

  const try_transform_node = (props: {
    context: ITypiaContext;
    node: ts.Node;
  }): ts.Node | null => {
    try {
      return NodeTransformer.transform(props);
    } catch (exp) {
      // ONLY ACCEPT TRANSFORMER-ERROR
      if (!isTransformerError(exp)) throw exp;

      // REPORT DIAGNOSTIC
      const diagnostic = ts.createDiagnosticForNode(props.node, {
        key: exp.code,
        category: ts.DiagnosticCategory.Error,
        message: exp.message,
        code: `(${exp.code})` as any,
      });
      props.context.extras.addDiagnostic(diagnostic);
      return null;
    }
  };

  const find_import_injection_index = (file: ts.SourceFile): number => {
    let i: number = 0;
    for (; i < file.statements.length; ++i) {
      const stmt: ts.Statement = file.statements[i]!;
      if (
        ts.isExpressionStatement(stmt) &&
        ts.isStringLiteralLike(stmt.expression) &&
        stmt.expression.text.startsWith("use ")
      )
        continue;
      break;
    }
    return i;
  };
}

const isTransformerError = (error: any): error is TransformerError =>
  typeof error === "object" &&
  error !== null &&
  error.constructor.name === "TransformerError" &&
  typeof error.code === "string" &&
  typeof error.message === "string";

const checkJsDocParsingMode = new Singleton(
  (context: ITypiaContext, file: ts.SourceFile) => {
    if (
      typeof file.jsDocParsingMode === "number" &&
      file.jsDocParsingMode !== 0
    ) {
      context.extras.addDiagnostic(
        ts.createDiagnosticForNode(file, {
          code: `(typia setup)` as any,
          key: "jsDocParsingMode",
          category: ts.DiagnosticCategory.Warning,
          message: [
            `Run "npx typia setup" or "npx typia patch" command again.`,
            ``,
            `Since TypeScript v5.3 update, "tsc" no more parses JSDoc comments. Therefore, "typia" also cannot utilize those JSDoc comments too, and it damages on some features of "typia" like "comment tags" or "JSON schema" generator.`,
            ``,
            `To solve this problem, run "npx typia setup" or "npx typia patch" command to hack the TypeScript compiler to revive the JSDoc parsing feature.`,
            ``,
            `  - reference: https://github.com/microsoft/TypeScript/pull/55739`,
          ].join("\n"),
        }),
      );
    }
  },
);
