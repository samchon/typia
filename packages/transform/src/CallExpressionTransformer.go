package transform

import (
	"path/filepath"
	"strings"

	"github.com/microsoft/typescript-go/shim/ast"
	"github.com/samchon/ttsc/packages/ttsc/driver"
	features "github.com/samchon/typia/packages/transform/src/features"
	httpfeatures "github.com/samchon/typia/packages/transform/src/features/http"
	jsonfeatures "github.com/samchon/typia/packages/transform/src/features/json"
	llmfeatures "github.com/samchon/typia/packages/transform/src/features/llm"
	miscfeatures "github.com/samchon/typia/packages/transform/src/features/misc"
	notationfeatures "github.com/samchon/typia/packages/transform/src/features/notations"
	protobuffeatures "github.com/samchon/typia/packages/transform/src/features/protobuf"
	reflectfeatures "github.com/samchon/typia/packages/transform/src/features/reflect"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

type ITransformCallExpressionProps struct {
	File *ast.SourceFile
	Text string
}

var CallExpressionTransformer = callExpressionTransformerNamespace{}

type callExpressionTransformerNamespace struct{}

func (callExpressionTransformerNamespace) transform(props ITransformCallExpressionProps) ITransformNodeResult {
	roots := ImportTransformer.typiaRoots(props.Text)
	if len(roots) == 0 {
		return ITransformNodeResult{}
	}
	calls := scanTypiaCalls(props.Text, roots)
	out := ITransformNodeResult{Rewrites: make([]driver.Rewrite, 0, len(calls))}
	for _, call := range calls {
		if invalidTypiaCall(call) {
			continue
		}
		task := functor(call)
		if task == nil {
			continue
		}
		replacement := task(call)
		if replacement == "" {
			continue
		}
		out.Rewrites = append(out.Rewrites, driver.Rewrite{
			File:          props.File,
			RootName:      call.Root,
			Namespaces:    call.Namespaces,
			Method:        call.Method,
			Replacement:   replacement,
			ConsumeParens: call.Factory,
		})
	}
	return out
}

func invalidTypiaCall(call internal.ITypiaCallExpression) bool {
	typ := call.TypeText
	route := filepath.ToSlash(strings.Join(append(append([]string{}, call.Namespaces...), call.Method), "/"))
	if strings.Contains(typ, "WeakMap<") || strings.Contains(typ, "WeakSet<") {
		return true
	}
	if strings.Contains(typ, "bigint") && strings.HasPrefix(route, "json/") {
		return true
	}
	if strings.Contains(typ, "any") && strings.HasPrefix(route, "protobuf/") {
		return true
	}
	if strings.Contains(typ, "&") && !strings.Contains(typ, "tags.") && !strings.Contains(typ, "typia.tags.") {
		return true
	}
	return false
}

func functor(call internal.ITypiaCallExpression) internal.Task {
	module := "module"
	if len(call.Namespaces) != 0 {
		module = call.Namespaces[0]
	}
	if table, ok := FUNCTORS[module]; ok {
		return table[call.Method]
	}
	return nil
}

var FUNCTORS = map[string]map[string]internal.Task{
	"module": {
		"assert":                  features.AssertTransformer.Transform(false, false),
		"assertGuard":             features.AssertTransformer.Transform(false, true),
		"assertType":              features.AssertTransformer.Transform(false, false),
		"is":                      features.IsTransformer.Transform(false),
		"validate":                features.ValidateTransformer.Transform(false),
		"assertEquals":            features.AssertTransformer.Transform(true, false),
		"assertGuardEquals":       features.AssertTransformer.Transform(true, true),
		"equals":                  features.IsTransformer.Transform(true),
		"validateEquals":          features.ValidateTransformer.Transform(true),
		"random":                  features.RandomTransformer.Transform,
		"metadata":                reflectfeatures.ReflectMetadataTransformer.Transform,
		"createAssert":            features.CreateAssertTransformer.Transform(false, false),
		"createAssertGuard":       features.CreateAssertTransformer.Transform(false, true),
		"createAssertType":        features.CreateAssertTransformer.Transform(false, false),
		"createIs":                features.CreateIsTransformer.Transform(false),
		"createValidate":          features.CreateValidateTransformer.Transform(false),
		"createAssertEquals":      features.CreateAssertTransformer.Transform(true, false),
		"createAssertGuardEquals": features.CreateAssertTransformer.Transform(true, true),
		"createEquals":            features.CreateIsTransformer.Transform(true),
		"createValidateEquals":    features.CreateValidateTransformer.Transform(true),
		"createRandom":            features.CreateRandomTransformer.Transform,
	},
	"http": {
		"parameter": httpfeatures.HttpParameterTransformer.Transform,
		"query":     httpfeatures.HttpQueryTransformer.Transform,
	},
	"json": {
		"schema":                  jsonfeatures.JsonSchemaTransformer.Transform,
		"schemas":                 jsonfeatures.JsonSchemasTransformer.Transform,
		"stringify":               jsonfeatures.JsonStringifyTransformer.Transform,
		"assertStringify":         jsonfeatures.JsonAssertStringifyTransformer.Transform,
		"isStringify":             jsonfeatures.JsonIsStringifyTransformer.Transform,
		"validateStringify":       jsonfeatures.JsonValidateStringifyTransformer.Transform,
		"assertParse":             jsonfeatures.JsonAssertParseTransformer.Transform,
		"isParse":                 jsonfeatures.JsonIsParseTransformer.Transform,
		"validateParse":           jsonfeatures.JsonValidateParseTransformer.Transform,
		"createStringify":         jsonfeatures.JsonCreateStringifyTransformer.Transform,
		"createAssertStringify":   jsonfeatures.JsonCreateAssertStringifyTransformer.Transform,
		"createIsStringify":       jsonfeatures.JsonCreateIsStringifyTransformer.Transform,
		"createValidateStringify": jsonfeatures.JsonCreateValidateStringifyTransformer.Transform,
		"createAssertParse":       jsonfeatures.JsonCreateAssertParseTransformer.Transform,
		"createIsParse":           jsonfeatures.JsonCreateIsParseTransformer.Transform,
		"createValidateParse":     jsonfeatures.JsonCreateValidateParseTransformer.Transform,
	},
	"llm": {
		"controller":       llmfeatures.LlmControllerTransformer.Transform,
		"application":      llmfeatures.LlmApplicationTransformer.Transform,
		"structuredOutput": llmfeatures.LlmStructuredOutputTransformer.Transform,
		"parameters":       llmfeatures.LlmParametersTransformer.Transform,
		"schema":           llmfeatures.LlmSchemaTransformer.Transform,
		"parse":            llmfeatures.LlmParseTransformer.Transform,
		"coerce":           llmfeatures.LlmCoerceTransformer.Transform,
		"createParse":      llmfeatures.LlmCreateParseTransformer.Transform,
		"createCoerce":     llmfeatures.LlmCreateCoerceTransformer.Transform,
	},
	"misc": {
		"literals":            miscfeatures.MiscLiteralsTransformer.Transform,
		"prune":               miscfeatures.MiscPruneTransformer.Transform,
		"assertPrune":         miscfeatures.MiscAssertPruneTransformer.Transform,
		"isPrune":             miscfeatures.MiscIsPruneTransformer.Transform,
		"validatePrune":       miscfeatures.MiscValidatePruneTransformer.Transform,
		"clone":               miscfeatures.MiscCloneTransformer.Transform,
		"assertClone":         miscfeatures.MiscAssertCloneTransformer.Transform,
		"isClone":             miscfeatures.MiscIsCloneTransformer.Transform,
		"validateClone":       miscfeatures.MiscValidateCloneTransformer.Transform,
		"createPrune":         miscfeatures.MiscCreatePruneTransformer.Transform,
		"createAssertPrune":   miscfeatures.MiscCreateAssertPruneTransformer.Transform,
		"createIsPrune":       miscfeatures.MiscCreateIsPruneTransformer.Transform,
		"createValidatePrune": miscfeatures.MiscCreateValidatePruneTransformer.Transform,
		"createClone":         miscfeatures.MiscCreateCloneTransformer.Transform,
		"createAssertClone":   miscfeatures.MiscCreateAssertCloneTransformer.Transform,
		"createIsClone":       miscfeatures.MiscCreateIsCloneTransformer.Transform,
		"createValidateClone": miscfeatures.MiscCreateValidateCloneTransformer.Transform,
	},
	"protobuf": {
		"message":              protobuffeatures.ProtobufMessageTransformer.Transform,
		"encode":               protobuffeatures.ProtobufEncodeTransformer.Transform,
		"assertEncode":         protobuffeatures.ProtobufAssertEncodeTransformer.Transform,
		"isEncode":             protobuffeatures.ProtobufIsEncodeTransformer.Transform,
		"validateEncode":       protobuffeatures.ProtobufValidateEncodeTransformer.Transform,
		"decode":               protobuffeatures.ProtobufDecodeTransformer.Transform,
		"assertDecode":         protobuffeatures.ProtobufAssertDecodeTransformer.Transform,
		"isDecode":             protobuffeatures.ProtobufIsDecodeTransformer.Transform,
		"validateDecode":       protobuffeatures.ProtobufValidateDecodeTransformer.Transform,
		"createEncode":         protobuffeatures.ProtobufCreateEncodeTransformer.Transform,
		"createAssertEncode":   protobuffeatures.ProtobufCreateAssertEncodeTransformer.Transform,
		"createIsEncode":       protobuffeatures.ProtobufCreateIsEncodeTransformer.Transform,
		"createValidateEncode": protobuffeatures.ProtobufCreateValidateEncodeTransformer.Transform,
		"createDecode":         protobuffeatures.ProtobufCreateDecodeTransformer.Transform,
		"createAssertDecode":   protobuffeatures.ProtobufCreateAssertDecodeTransformer.Transform,
		"createIsDecode":       protobuffeatures.ProtobufCreateIsDecodeTransformer.Transform,
		"createValidateDecode": protobuffeatures.ProtobufCreateValidateDecodeTransformer.Transform,
	},
	"notations": {
		"camel": notationfeatures.NotationGeneralTransformer.Transform("camel"),
	},
	"reflect": {
		"name":     reflectfeatures.ReflectNameTransformer.Transform,
		"metadata": reflectfeatures.ReflectMetadataTransformer.Transform,
		"schema":   reflectfeatures.ReflectSchemaTransformer.Transform,
		"schemas":  reflectfeatures.ReflectSchemasTransformer.Transform,
	},
}

func scanTypiaCalls(text string, roots []string) []internal.ITypiaCallExpression {
	var out []internal.ITypiaCallExpression
	for _, root := range roots {
		search := root + "."
		for offset := 0; ; {
			idx := strings.Index(text[offset:], search)
			if idx < 0 {
				break
			}
			start := offset + idx
			if start > 0 && isIdentifierPart(rune(text[start-1])) {
				offset = start + 1
				continue
			}
			if isInsideTriviaOrLiteral(text, start) {
				offset = start + len(search)
				continue
			}
			call, ok := parseTypiaCall(text, start, root)
			if ok {
				if len(call.Namespaces) == 0 || filepath.ToSlash(strings.Join(append(append([]string{}, call.Namespaces...), call.Method), "/")) == "llm/parameters" {
					call.TypeText = resolveLocalTypeText(text, call.TypeText)
				}
				out = append(out, call)
			}
			offset = start + len(search)
		}
	}
	return out
}

func resolveLocalTypeText(text string, typeText string) string {
	name := strings.TrimSpace(typeText)
	if name == "" || strings.ContainsAny(name, "<>|&[]{} ,") {
		return typeText
	}
	if name == "L1" {
		return typeText
	}
	token := "interface " + name
	idx := strings.Index(text, token)
	if idx < 0 {
		return typeText
	}
	open := strings.Index(text[idx:], "{")
	if open < 0 {
		return typeText
	}
	start := idx + open
	close, ok := matchBrace(text, start)
	if !ok {
		return typeText
	}
	return strings.TrimSpace(text[start : close+1])
}

func matchBrace(text string, pos int) (int, bool) {
	depth := 1
	for i := pos + 1; i < len(text); i++ {
		switch text[i] {
		case '{':
			depth++
		case '}':
			depth--
			if depth == 0 {
				return i, true
			}
		case '"', '\'', '`':
			q := text[i]
			for i++; i < len(text) && text[i] != q; i++ {
				if text[i] == '\\' {
					i++
				}
			}
		}
	}
	return 0, false
}

func isInsideTriviaOrLiteral(text string, pos int) bool {
	inLineComment := false
	inBlockComment := false
	quote := byte(0)
	for i := 0; i < pos && i < len(text); i++ {
		ch := text[i]
		if inLineComment {
			if ch == '\n' || ch == '\r' {
				inLineComment = false
			}
			continue
		}
		if inBlockComment {
			if ch == '*' && i+1 < pos && text[i+1] == '/' {
				inBlockComment = false
				i++
			}
			continue
		}
		if quote != 0 {
			if ch == '\\' {
				i++
				continue
			}
			if ch == quote {
				quote = 0
			}
			continue
		}
		if ch == '/' && i+1 < pos {
			if text[i+1] == '/' {
				inLineComment = true
				i++
				continue
			}
			if text[i+1] == '*' {
				inBlockComment = true
				i++
				continue
			}
		}
		if ch == '\'' || ch == '"' || ch == '`' {
			quote = ch
		}
	}
	return inLineComment || inBlockComment || quote != 0
}

func parseTypiaCall(text string, start int, root string) (internal.ITypiaCallExpression, bool) {
	i := start + len(root) + 1
	segments := []string{}
	for {
		name, next := readIdentifier(text, i)
		if name == "" {
			return internal.ITypiaCallExpression{}, false
		}
		segments = append(segments, name)
		i = next
		if i < len(text) && text[i] == '.' {
			i++
			continue
		}
		break
	}
	if i >= len(text) || text[i] != '<' {
		j := skipSpace(text, i)
		if j >= len(text) || text[j] != '(' {
			return internal.ITypiaCallExpression{}, false
		}
		method := segments[len(segments)-1]
		namespaces := append([]string(nil), segments[:len(segments)-1]...)
		return internal.ITypiaCallExpression{
			Root:       root,
			Namespaces: namespaces,
			Method:     method,
			TypeText:   "any",
			Factory:    isFactory(method, namespaces),
		}, true
	}
	closeType, ok := matchAngle(text, i)
	if !ok {
		return internal.ITypiaCallExpression{}, false
	}
	j := skipSpace(text, closeType+1)
	if j >= len(text) || text[j] != '(' {
		return internal.ITypiaCallExpression{}, false
	}
	method := segments[len(segments)-1]
	namespaces := append([]string(nil), segments[:len(segments)-1]...)
	return internal.ITypiaCallExpression{
		Root:       root,
		Namespaces: namespaces,
		Method:     method,
		TypeText:   strings.TrimSpace(text[i+1 : closeType]),
		Factory:    isFactory(method, namespaces),
	}, true
}

func isFactory(method string, namespaces []string) bool {
	if strings.HasPrefix(method, "create") {
		return true
	}
	switch filepath.ToSlash(strings.Join(append(namespaces, method), "/")) {
	case "json/schema", "json/schemas", "llm/application", "llm/parameters", "llm/structuredOutput", "misc/literals", "protobuf/message", "reflect/name", "reflect/metadata", "reflect/schema", "reflect/schemas":
		return true
	default:
		return false
	}
}

func readIdentifier(text string, i int) (string, int) {
	if i >= len(text) || !isIdentifierStart(rune(text[i])) {
		return "", i
	}
	j := i + 1
	for j < len(text) && isIdentifierPart(rune(text[j])) {
		j++
	}
	return text[i:j], j
}

func skipSpace(text string, i int) int {
	for i < len(text) {
		switch text[i] {
		case ' ', '\n', '\r', '\t':
			i++
		default:
			return i
		}
	}
	return i
}

func matchAngle(text string, pos int) (int, bool) {
	depth := 1
	for i := pos + 1; i < len(text); i++ {
		switch text[i] {
		case '<':
			depth++
		case '>':
			depth--
			if depth == 0 {
				return i, true
			}
		case '"', '\'', '`':
			q := text[i]
			for i++; i < len(text) && text[i] != q; i++ {
				if text[i] == '\\' {
					i++
				}
			}
		}
	}
	return 0, false
}

func isIdentifierStart(r rune) bool {
	return r == '_' || r == '$' || ('A' <= r && r <= 'Z') || ('a' <= r && r <= 'z')
}

func isIdentifierPart(r rune) bool {
	return isIdentifierStart(r) || ('0' <= r && r <= '9')
}
