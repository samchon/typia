//go:build typia_native_internal
// +build typia_native_internal

package adapter

import (
	"path/filepath"
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	shimcore "github.com/microsoft/typescript-go/shim/core"
	shimparser "github.com/microsoft/typescript-go/shim/parser"
)

// TestVisitPropertyChainEdges verifies call-site property-chain parsing.
//
// Call-site discovery peels a TypeScript expression like
// `typia.json.stringify()` into a root import name, namespace chain, and method.
// Malformed or mismatched chains must be rejected without producing a site.
//
// 1. Build a nested property-access call expression.
// 2. Extract the root name, namespace, and terminal method.
// 3. Reject a method mismatch, a non-property call, and an empty member name.
// 4. Verify nil nodes do not append call sites.
func TestVisitPropertyChainEdges(t *testing.T) {
	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	namespace := factory.NewPropertyAccessExpression(
		factory.NewIdentifier("typia"),
		nil,
		factory.NewIdentifier("json"),
		shimast.NodeFlagsNone,
	)
	method := factory.NewPropertyAccessExpression(
		namespace,
		nil,
		factory.NewIdentifier("stringify"),
		shimast.NodeFlagsNone,
	)
	call := factory.NewCallExpression(method, nil, nil, factory.NewNodeList(nil), shimast.NodeFlagsNone).AsCallExpression()

	root, namespaces, ok := extractRootAndNamespaces(call, "stringify")
	if !ok || root != "typia" || len(namespaces) != 1 || namespaces[0] != "json" {
		t.Fatalf("unexpected property-chain extraction: root=%q namespaces=%#v ok=%v", root, namespaces, ok)
	}
	if _, _, ok := extractRootAndNamespaces(call, "is"); ok {
		t.Fatal("method mismatch should reject the call chain")
	}
	statement := factory.NewExpressionStatement(factory.NewIdentifier("noop"))
	if method := callSiteMethodName(nil, statement, call); method != "stringify" {
		t.Fatalf("property-access method fallback mismatch: %q", method)
	}
	declaration := factory.NewFunctionDeclaration(
		nil,
		nil,
		factory.NewIdentifier("declared"),
		nil,
		nil,
		nil,
		nil,
		nil,
	)
	if method := callSiteMethodName(nil, declaration, call); method != "declared" {
		t.Fatalf("declaration-name fallback mismatch: %q", method)
	}

	plain := factory.NewCallExpression(
		factory.NewIdentifier("plain"),
		nil,
		nil,
		factory.NewNodeList(nil),
		shimast.NodeFlagsNone,
	).AsCallExpression()
	if _, _, ok := extractRootAndNamespaces(plain, "plain"); ok {
		t.Fatal("plain calls without a property chain should be rejected")
	}
	literal := factory.NewCallExpression(
		factory.NewStringLiteral("call", shimast.TokenFlagsNone),
		nil,
		nil,
		factory.NewNodeList(nil),
		shimast.NodeFlagsNone,
	).AsCallExpression()
	if _, _, ok := extractRootAndNamespaces(literal, "call"); ok {
		t.Fatal("non-identifier root expressions should be rejected")
	}

	emptyMember := factory.NewPropertyAccessExpression(
		factory.NewIdentifier("typia"),
		nil,
		factory.NewIdentifier(""),
		shimast.NodeFlagsNone,
	)
	emptyCall := factory.NewCallExpression(emptyMember, nil, nil, factory.NewNodeList(nil), shimast.NodeFlagsNone).AsCallExpression()
	if _, _, ok := extractRootAndNamespaces(emptyCall, ""); ok {
		t.Fatal("empty property name should be rejected")
	}
	stringMember := factory.NewPropertyAccessExpression(
		factory.NewIdentifier("typia"),
		nil,
		factory.NewStringLiteral("is", shimast.TokenFlagsNone),
		shimast.NodeFlagsNone,
	)
	stringMemberCall := factory.NewCallExpression(stringMember, nil, nil, factory.NewNodeList(nil), shimast.NodeFlagsNone).AsCallExpression()
	if _, _, ok := extractRootAndNamespaces(stringMemberCall, "is"); ok {
		t.Fatal("non-identifier property names should be rejected")
	}
	sites := []CallSite{}
	visitCallSite(nil, nil, nil, &sites)
	if len(sites) != 0 {
		t.Fatalf("nil node should not append call sites: %#v", sites)
	}
	file := shimparser.ParseSourceFile(
		shimast.SourceFileParseOptions{FileName: filepath.Join(t.TempDir(), "visit.ts")},
		`typia.is(input);`,
		shimcore.ScriptKindTS,
	)
	declFile := *file
	declFile.IsDeclarationFile = true
	if sites := CollectCallSites([]*shimast.SourceFile{nil, &declFile}, nil); len(sites) != 0 {
		t.Fatalf("nil and declaration files should not produce call sites: %#v", sites)
	}
	if _, ok := tryCallSite(file, nil, call.AsNode()); ok {
		t.Fatal("nil checker should reject call-site probing")
	}
	if _, ok := tryCallSite(file, &shimchecker.Checker{}, statement); ok {
		t.Fatal("non-call nodes should reject call-site probing")
	}
}
