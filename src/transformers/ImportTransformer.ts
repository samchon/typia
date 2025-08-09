import path from "path";
import ts from "typescript";

export namespace ImportTransformer {
  export const transform =
    (props: { from: string; to: string }) =>
    (context: ts.TransformationContext) =>
    (file: ts.SourceFile) =>
      transform_file({
        top: props.from,
        to: props.to,
        context,
        file,
      });

  const transform_file = (props: {
    top: string;
    to: string;
    context: ts.TransformationContext;
    file: ts.SourceFile;
  }): ts.SourceFile => {
    if (props.file.isDeclarationFile) return props.file;

    const from: string = get_directory_path(
      path.resolve(props.file.getSourceFile().fileName),
    );
    const to: string = from.replace(props.top, props.to);

    // First pass: transform relative imports
    let transformedFile = ts.visitEachChild(
      props.file,
      (node) =>
        transform_node({
          top: props.top,
          from,
          to,
          node,
        }),
      props.context,
    );
    
    // Second pass: remove unused typia imports
    transformedFile = removeUnusedTypiaImports(transformedFile);
    
    return transformedFile;
  };

  const transform_node = (props: {
    top: string;
    from: string;
    to: string;
    node: ts.Node;
  }) => {
    if (
      !ts.isImportDeclaration(props.node) ||
      !ts.isStringLiteral(props.node.moduleSpecifier)
    )
      return props.node;

    const text: string = props.node.moduleSpecifier.text;
    if (text[0] !== ".") return props.node;

    const location: string = path.resolve(props.from, text);
    if (location.indexOf(props.top) === 0) return props.node;

    const replaced: string = (() => {
      const simple: string = path
        .relative(props.to, location)
        .split(path.sep)
        .join("/");
      return simple[0] === "." ? simple : `./${simple}`;
    })();

    return ts.factory.createImportDeclaration(
      undefined,
      props.node.importClause,
      ts.factory.createStringLiteral(replaced),
      props.node.assertClause,
    );
  };
}

const get_directory_path = (file: string): string => {
  const split: string[] = path.resolve(file).split(path.sep);
  split.pop();
  return path.resolve(split.join(path.sep));
};

/**
 * Remove unused typia imports that are only used in transformable calls
 */
const removeUnusedTypiaImports = (file: ts.SourceFile): ts.SourceFile => {
  // Find typia imports and collect all identifiers
  const typiaImports = new Map<string, { statement: ts.ImportDeclaration; isDefault: boolean }>();
  
  for (const statement of file.statements) {
    if (ts.isImportDeclaration(statement) && 
        ts.isStringLiteral(statement.moduleSpecifier) &&
        statement.moduleSpecifier.text === "typia" &&
        statement.importClause) {
      
      // Track default import (import typia from 'typia')
      if (statement.importClause.name) {
        const name = statement.importClause.name.text;
        typiaImports.set(name, { statement, isDefault: true });
      }
      
      // Track named imports (import { tags } from 'typia') - keep these
      if (statement.importClause.namedBindings && 
          ts.isNamedImports(statement.importClause.namedBindings)) {
        for (const element of statement.importClause.namedBindings.elements) {
          const name = element.name.text;
          typiaImports.set(name, { statement, isDefault: false });
        }
      }
    }
  }
  
  if (typiaImports.size === 0) {
    return file; // No typia imports to check
  }
  
  // Find usage of typia identifiers that are NOT transformable calls
  const nonTransformableUsage = new Set<string>();
  
  const checkUsage = (node: ts.Node) => {
    if (ts.isIdentifier(node) && typiaImports.has(node.text)) {
      const identifier = node.text;
      
      // Check if this identifier is being used as part of a property access
      if (ts.isPropertyAccessExpression(node.parent) && node.parent.expression === node) {
        // This is typia.something - check if it's a transformable call pattern
        if (!isLikelyTransformableCall(node.parent)) {
          nonTransformableUsage.add(identifier);
        }
      } else {
        // Direct usage of the typia identifier (not as property access)
        // This is definitely non-transformable usage
        nonTransformableUsage.add(identifier);
      }
    }
    
    ts.forEachChild(node, checkUsage);
  };
  
  // Check all statements except import declarations
  for (const statement of file.statements) {
    if (!ts.isImportDeclaration(statement) || 
        !ts.isStringLiteral(statement.moduleSpecifier) ||
        statement.moduleSpecifier.text !== "typia") {
      checkUsage(statement);
    }
  }
  
  // Update import statements
  const newStatements: ts.Statement[] = [];
  
  for (const statement of file.statements) {
    if (ts.isImportDeclaration(statement) && 
        ts.isStringLiteral(statement.moduleSpecifier) &&
        statement.moduleSpecifier.text === "typia" &&
        statement.importClause) {
      
      const newImportClause = filterTypiaImportClause(statement.importClause, nonTransformableUsage);
      if (newImportClause) {
        newStatements.push(ts.factory.createImportDeclaration(
          statement.modifiers,
          newImportClause,
          statement.moduleSpecifier,
          statement.assertClause
        ));
      }
      // Skip adding the import if all imports are unused
    } else {
      newStatements.push(statement);
    }
  }
  
  return ts.factory.updateSourceFile(
    file,
    newStatements,
    file.isDeclarationFile,
    file.referencedFiles,
    file.typeReferenceDirectives,
    file.hasNoDefaultLib,
    file.libReferenceDirectives
  );
};

/**
 * Check if a property access expression looks like a transformable typia call
 * This uses heuristics to detect patterns like typia.xxx(), typia.namespace.xxx()
 */
const isLikelyTransformableCall = (node: ts.PropertyAccessExpression): boolean => {
  // Check if this is eventually part of a call expression
  let current: ts.Node = node;
  
  // Walk up the chain to find if this leads to a call expression
  // Handle patterns like: typia.xxx(), typia.namespace.xxx()
  while (ts.isPropertyAccessExpression(current)) {
    current = current.parent;
  }
  
  // If the final result is a call expression, this is likely transformable
  if (ts.isCallExpression(current) && 
      (current.expression === node || 
       (ts.isPropertyAccessExpression(current.expression) && 
        isTypiaPropertyChain(current.expression)))) {
    return true;
  }
  
  return false;
};

/**
 * Check if a property access expression is part of a typia.xxx.yyy chain
 */
const isTypiaPropertyChain = (node: ts.PropertyAccessExpression): boolean => {
  let current: ts.Expression = node;
  
  while (ts.isPropertyAccessExpression(current)) {
    current = current.expression;
  }
  
  return ts.isIdentifier(current) && current.text === 'typia';
};

/**
 * Filter import clause to remove unused default imports
 */
const filterTypiaImportClause = (
  importClause: ts.ImportClause, 
  usedImports: Set<string>
): ts.ImportClause | undefined => {
  const hasDefaultImport = importClause.name && usedImports.has(importClause.name.text);
  const namedBindings = importClause.namedBindings; // Always keep named bindings like { tags }
  
  // Return undefined if no imports are used
  if (!hasDefaultImport && !namedBindings) {
    return undefined;
  }
  
  return ts.factory.createImportClause(
    importClause.isTypeOnly,
    hasDefaultImport ? importClause.name : undefined,
    namedBindings
  );
};
