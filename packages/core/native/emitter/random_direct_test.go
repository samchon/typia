package emitter

import (
	"strings"
	"testing"

	"github.com/samchon/typia/packages/core/native/metadata"
)

func TestRandomRegExpUsesLegacyInternalHelper(t *testing.T) {
	schema := metadata.NewSchema()
	schema.Natives = append(schema.Natives, metadata.Native{Name: "RegExp"})
	got, err := EmitRandomArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	if !strings.Contains(got, "new RegExp((_generator?.regex ?? "+randomFormatRegexAlias+"._randomFormatRegex)())") {
		t.Fatalf("RegExp random should delegate to legacy regex helper:\n%s", got)
	}
}

func TestRandomArrayBufferUsesRandomBytes(t *testing.T) {
	schema := metadata.NewSchema()
	schema.Natives = append(schema.Natives, metadata.Native{Name: "ArrayBuffer"})
	got, err := EmitRandomArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		"new Uint8Array(",
		randomArrayImportAlias + "._randomArray",
		".buffer",
	} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("ArrayBuffer random should include %q:\n%s", fragment, got)
		}
	}
}

func TestRandomBlobUsesRandomByteArray(t *testing.T) {
	schema := metadata.NewSchema()
	schema.Natives = append(schema.Natives, metadata.Native{Name: "Blob"})
	got, err := EmitRandomArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		"new Blob([new Uint8Array(",
		randomArrayImportAlias + "._randomArray",
	} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("Blob random should include %q:\n%s", fragment, got)
		}
	}
}

func TestRandomFileUsesRandomByteArrayAndGeneratedName(t *testing.T) {
	schema := metadata.NewSchema()
	schema.Natives = append(schema.Natives, metadata.Native{Name: "File"})
	got, err := EmitRandomArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		"new File([new Uint8Array(",
		randomArrayImportAlias + "._randomArray",
		randomStringImportAlias + "._randomString",
		"minLength: 1, maxLength: 8",
		"minLength: 3, maxLength: 3",
	} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("File random should include %q:\n%s", fragment, got)
		}
	}
}

func TestRandomSharedArrayBufferUsesFilledRandomBytes(t *testing.T) {
	schema := metadata.NewSchema()
	schema.Natives = append(schema.Natives, metadata.Native{Name: "SharedArrayBuffer"})
	got, err := EmitRandomArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		"new SharedArrayBuffer(length)",
		"new Uint8Array(buffer)",
		"bytes.set(new Array(length).fill(0).map(() =>",
		randomIntegerImportAlias + "._randomInteger",
	} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("SharedArrayBuffer random should include %q:\n%s", fragment, got)
		}
	}
}

func TestRandomDataViewUsesRandomByteArrayBuffer(t *testing.T) {
	schema := metadata.NewSchema()
	schema.Natives = append(schema.Natives, metadata.Native{Name: "DataView"})
	got, err := EmitRandomArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	if !strings.Contains(got, "new DataView(new Uint8Array(") || !strings.Contains(got, ".buffer)") {
		t.Fatalf("DataView random should wrap a random byte array buffer:\n%s", got)
	}
}

func TestRandomURLUsesLegacyNativeConstructor(t *testing.T) {
	schema := metadata.NewSchema()
	schema.Natives = append(schema.Natives, metadata.Native{Name: "URL"})
	got, err := EmitRandomArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	if !strings.Contains(got, "new URL()") || strings.Contains(got, "https://example.com") {
		t.Fatalf("URL random should follow legacy default native constructor:\n%s", got)
	}
}

func TestRandomNativeByteArrayRangesMirrorLegacy(t *testing.T) {
	tests := []struct {
		name    string
		typ     string
		minimum any
		maximum any
		kind    metadata.AtomicKind
	}{
		{name: "BigUint64Array", typ: "uint64", minimum: 0, maximum: 18446744073709551615.0, kind: metadata.AtomicBigint},
		{name: "BigInt64Array", typ: "uint64", minimum: -9223372036854775808.0, maximum: 9223372036854775807.0, kind: metadata.AtomicBigint},
		{name: "Float32Array", typ: "float", minimum: -1.175494351e38, maximum: 3.4028235e38, kind: metadata.AtomicNumber},
		{name: "Float64Array", typ: "double", minimum: 5e-324, maximum: 1.7976931348623157e308, kind: metadata.AtomicNumber},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			kind, tags := nativeByteArrayAtomic(tt.name)
			if kind != tt.kind {
				t.Fatalf("kind mismatch: %s", kind)
			}
			if tags[0].Value != tt.typ {
				t.Fatalf("type tag mismatch: %v", tags[0].Value)
			}
			if tags[1].Value != tt.minimum {
				t.Fatalf("minimum mismatch: %#v", tags[1].Value)
			}
			if tags[2].Value != tt.maximum {
				t.Fatalf("maximum mismatch: %#v", tags[2].Value)
			}
		})
	}
}

func TestRandomRecursiveArrayUsesLocalHelper(t *testing.T) {
	schema := metadata.NewSchema()
	array := &metadata.ArrayType{Name: "RecursiveArray", Recursive: true}
	array.Value = schema
	schema.Arrays = append(schema.Arrays, &metadata.ArrayRef{Type: array})

	got, err := EmitRandomArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		"const _ra0 = (_schema, _recursive = true, _depth = 0) =>",
		"(5 >= _depth ? (_generator?.array ?? " + randomArrayImportAlias + "._randomArray)",
		"\"element\": () => _ra0({})",
		"return _ra0({});",
	} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("recursive array random should include %q:\n%s", fragment, got)
		}
	}
}

func TestRandomRecursiveTupleUsesLocalHelper(t *testing.T) {
	schema := metadata.NewSchema()
	tuple := &metadata.TupleType{Name: "RecursiveTuple", Recursive: true}
	elem := metadata.NewSchema()
	elem.Tuples = append(elem.Tuples, &metadata.TupleRef{Type: tuple})
	tuple.Elements = []*metadata.Schema{elem}
	schema.Tuples = append(schema.Tuples, &metadata.TupleRef{Type: tuple})

	got, err := EmitRandomArrowFunction(schema)
	if err != nil {
		t.Fatal(err)
	}
	for _, fragment := range []string{
		"const _rt0 = (_recursive = true, _depth = 0) =>",
		"[_rt0(true, 1 + _depth)]",
		"return _rt0(true, 0);",
	} {
		if !strings.Contains(got, fragment) {
			t.Fatalf("recursive tuple random should include %q:\n%s", fragment, got)
		}
	}
}
