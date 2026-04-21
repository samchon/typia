import ts from "typescript";
/**
 * Transforms import paths for typia build output.
 *
 * Rewrites relative import paths when building typia packages. Also removes
 * unused typia imports that only contained transformable function calls (since
 * those are replaced at compile time).
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare namespace ImportTransformer {
    const transform: (props: {
        from: string;
        to: string;
    }) => (context: ts.TransformationContext) => (file: ts.SourceFile) => ts.SourceFile;
}
