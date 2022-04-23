import ts from "typescript";

export namespace TypeFactory
{
    export function escape(checker: ts.TypeChecker, type: ts.Type): [ts.Type, boolean]
    {
        const converted: ts.Type | null = get_return_type(checker, type, "toJSON");
        return [converted || type, !!converted];
    }

    export function is_function(node: ts.Node): boolean
    {
        return get_function(node) !== null;
    }

    function get_function(node: ts.Node): ts.SignatureDeclaration | null
    {
        return ts.isFunctionLike(node)
            ? node
            : (ts.isPropertyAssignment(node) || ts.isPropertyDeclaration(node))
                ? ts.isFunctionLike(node.initializer)
                    ? node.initializer
                    : null
                : null;
    }

    function get_return_type
        (
            checker: ts.TypeChecker, 
            type: ts.Type,
            name: string
        ): ts.Type | null
    {
        // FIND TO-JSON METHOD
        const symbol: ts.Symbol | undefined = type.getProperty(name);
        if (!symbol)
            return null;
        else if (!symbol.declarations || !symbol.declarations[0])
            return null;
    
        // GET FUNCTION DECLARATION
        const declaration: ts.Declaration = symbol.declarations[0];
        const functor: ts.SignatureDeclaration | null = get_function(declaration);
        
        if (functor === null)
            return null;
    
        // RETURNS THE RETURN-TYPE
        const signature: ts.Signature | undefined = checker.getSignatureFromDeclaration(functor);
        return signature ? signature.getReturnType() : null;
    }
}