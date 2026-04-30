package metadata

import (
	"strings"

	nativeast "github.com/microsoft/typescript-go/shim/ast"
	nativechecker "github.com/microsoft/typescript-go/shim/checker"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type metadataHelperNamespace struct{}

var MetadataHelper = metadataHelperNamespace{}

func (metadataHelperNamespace) Literal_to_metadata(key string) *schemametadata.MetadataSchema {
	metadata := schemametadata.MetadataSchema_initialize()
	metadata.Constants = append(metadata.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
		Type: "string",
		Values: []*schemametadata.MetadataConstantValue{
			schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{
				Value: key,
				Tags:  [][]schemametadata.IMetadataTypeTag{},
			}),
		},
	}))
	return metadata
}

func metadata_array_util_add_bool(array *[]bool, value bool) {
	for _, elem := range *array {
		if elem == value {
			return
		}
	}
	*array = append(*array, value)
}

func metadata_type_full_name(checker *nativechecker.Checker, typ *nativechecker.Type) string {
	if checker == nil || typ == nil {
		return ""
	}
	if typ.IsUnion() || typ.IsIntersection() {
		joiner := " | "
		if typ.IsIntersection() {
			joiner = " & "
		}
		children := typ.Types()
		names := make([]string, 0, len(children))
		for _, child := range children {
			names = append(names, metadata_type_full_name(checker, child))
		}
		return strings.Join(names, joiner)
	}
	return checker.TypeToString(typ)
}

func metadata_get_type_arguments(checker *nativechecker.Checker, typ *nativechecker.Type) (output []*nativechecker.Type) {
	if checker == nil || typ == nil {
		return nil
	}
	defer func() {
		if recover() != nil {
			output = nil
		}
	}()
	return checker.GetTypeArguments(typ)
}

func metadata_get_function_node(typ *nativechecker.Type) *nativeast.Node {
	if typ == nil {
		return nil
	}
	symbol := typ.Symbol()
	if symbol == nil || len(symbol.Declarations) == 0 {
		return nil
	}
	node := symbol.Declarations[0]
	if nativeast.IsFunctionLike(node) {
		return node
	}
	if nativeast.IsPropertyAssignment(node) {
		initializer := node.AsPropertyAssignment().Initializer
		if nativeast.IsFunctionLike(initializer) {
			return initializer
		}
		return nil
	}
	if nativeast.IsPropertyDeclaration(node) {
		initializer := node.AsPropertyDeclaration().Initializer
		if nativeast.IsFunctionLike(initializer) {
			return initializer
		}
	}
	return nil
}

func metadata_get_return_type_of_class_method(props struct {
	Checker  *nativechecker.Checker
	Class    *nativechecker.Type
	Function string
}) *nativechecker.Type {
	if props.Checker == nil || props.Class == nil {
		return nil
	}
	symbol := props.Checker.GetPropertyOfType(props.Class, props.Function)
	if symbol == nil || symbol.ValueDeclaration == nil {
		return nil
	}
	functor := props.Checker.GetTypeOfSymbolAtLocation(symbol, symbol.ValueDeclaration)
	signatures := props.Checker.GetSignaturesOfType(functor, nativechecker.SignatureKindCall)
	if len(signatures) == 0 {
		return nil
	}
	return props.Checker.GetReturnTypeOfSignature(signatures[0])
}

func metadata_node_js_doc_tags(symbol *nativeast.Symbol) []schemametadata.IJsDocTagInfo {
	output := []schemametadata.IJsDocTagInfo{}
	for _, node := range metadata_node_declarations(symbol) {
		for _, jsdoc := range node.JSDoc(nil) {
			doc := jsdoc.AsJSDoc()
			if doc == nil || doc.Tags == nil {
				continue
			}
			for _, tag := range doc.Tags.Nodes {
				if tag == nil || tag.TagName() == nil {
					continue
				}
				texts := []schemametadata.IJsDocTagInfo_IText{}
				if name := metadata_js_doc_parameter_name(tag); name != "" {
					texts = append(texts, schemametadata.IJsDocTagInfo_IText{
						Kind: "parameterName",
						Text: name,
					})
				}
				if text := metadata_js_doc_comment_text(tag.CommentList()); text != "" {
					texts = append(texts, schemametadata.IJsDocTagInfo_IText{
						Kind: "text",
						Text: text,
					})
				}
				output = append(output, schemametadata.IJsDocTagInfo{
					Name: tag.TagName().Text(),
					Text: texts,
				})
			}
		}
	}
	return output
}

func metadata_node_description(symbol *nativeast.Symbol) *string {
	for _, node := range metadata_node_declarations(symbol) {
		for _, jsdoc := range node.JSDoc(nil) {
			doc := jsdoc.AsJSDoc()
			if doc == nil {
				continue
			}
			if text := metadata_js_doc_comment_text(doc.Comment); text != "" {
				return &text
			}
		}
	}
	return nil
}

func metadata_is_internal(symbol *nativeast.Symbol) bool {
	return false
}

func metadata_node_declarations(symbol *nativeast.Symbol) []*nativeast.Node {
	if symbol == nil {
		return nil
	}
	output := []*nativeast.Node{}
	visited := map[*nativeast.Node]bool{}
	appendNode := func(node *nativeast.Node) {
		if node != nil && visited[node] == false {
			visited[node] = true
			output = append(output, node)
		}
	}
	appendNode(symbol.ValueDeclaration)
	for _, node := range symbol.Declarations {
		appendNode(node)
	}
	return output
}

func metadata_js_doc_parameter_name(tag *nativeast.Node) string {
	if tag == nil {
		return ""
	}
	if tag.Kind.String() != "KindJSDocParameterTag" && tag.Kind.String() != "KindJSDocPropertyTag" {
		return ""
	}
	name := tag.AsJSDocParameterOrPropertyTag().Name()
	if name == nil {
		return ""
	}
	return name.Text()
}

func metadata_js_doc_comment_text(list *nativeast.NodeList) string {
	if list == nil {
		return ""
	}
	parts := []string{}
	for _, node := range list.Nodes {
		if node != nil {
			parts = append(parts, node.Text())
		}
	}
	return metadata_clean_js_doc_text(strings.Join(parts, ""))
}

func metadata_clean_js_doc_text(text string) string {
	text = strings.ReplaceAll(text, "\r\n", "\n")
	text = strings.ReplaceAll(text, "\r", "\n")
	lines := strings.Split(text, "\n")
	for i, line := range lines {
		lines[i] = strings.TrimRight(line, " \t")
	}
	return strings.TrimSpace(strings.Join(lines, "\n"))
}
