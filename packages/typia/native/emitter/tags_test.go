package emitter

import (
	"strings"
	"testing"

	"github.com/samchon/typia/packages/typia/native/metadata"
)

func TestTagCheckFormatEmail(t *testing.T) {
	tag := metadata.TypeTag{Kind: "format", Value: "email"}
	got := tagCheck("input", tag)
	if !strings.Contains(got, "new RegExp") || !strings.Contains(got, ".test(input)") {
		t.Errorf("format email should emit regex.test, got %q", got)
	}
}

func TestTagCheckMinimumMaximum(t *testing.T) {
	cases := []struct {
		kind string
		val  any
		want string
	}{
		{"minimum", int64(5), "5 <= input"},
		{"maximum", int64(10), "10 >= input"},
		{"exclusiveMinimum", int64(0), "0 < input"},
		{"exclusiveMaximum", int64(100), "100 > input"},
	}
	for _, tc := range cases {
		tag := metadata.TypeTag{Kind: tc.kind, Value: tc.val}
		got := tagCheck("input", tag)
		if !strings.Contains(got, tc.want) {
			t.Errorf("%s: expected %q in %q", tc.kind, tc.want, got)
		}
	}
}

func TestTagCheckValidateTemplateOverride(t *testing.T) {
	// When a validate template is present it wins over the numeric fallback
	// — matches typia v12 behaviour where the generic value is already baked.
	tag := metadata.TypeTag{Kind: "minimum", Value: int64(0), Validate: "5 <= $input"}
	got := tagCheck("input", tag)
	if got != "5 <= input" {
		t.Errorf("expected template substitution, got %q", got)
	}
}

func TestTagCheckPattern(t *testing.T) {
	tag := metadata.TypeTag{Kind: "pattern", Value: "^[A-Z]+$"}
	got := tagCheck("input", tag)
	if !strings.Contains(got, `"^[A-Z]+$"`) || !strings.Contains(got, "RegExp") {
		t.Errorf("pattern should use RegExp, got %q", got)
	}
}

func TestTagCheckTypeInt32(t *testing.T) {
	tag := metadata.TypeTag{Kind: "type", Value: "int32"}
	got := tagCheck("input", tag)
	if !strings.Contains(got, "Number.isInteger(input)") {
		t.Errorf("type int32 should use Number.isInteger, got %q", got)
	}
	if !strings.Contains(got, "-2147483648") {
		t.Errorf("type int32 should include signed 32-bit bounds, got %q", got)
	}
}

func TestAtomicWithTagsEmpty(t *testing.T) {
	got := atomicWithTags(`"string" === typeof input`, "input", nil)
	if got != `"string" === typeof input` {
		t.Errorf("empty tag matrix should return base, got %q", got)
	}
}

func TestAtomicWithTagsSingleRow(t *testing.T) {
	matrix := metadata.TagMatrix{{
		metadata.TypeTag{Kind: "minLength", Value: int64(3)},
		metadata.TypeTag{Kind: "maxLength", Value: int64(10)},
	}}
	got := atomicWithTags(`"string" === typeof input`, "input", matrix)
	// Should AND the base + minLength + maxLength.
	for _, want := range []string{
		`"string" === typeof input`,
		`3 <= input.length`,
		`10 >= input.length`,
		` && `,
	} {
		if !strings.Contains(got, want) {
			t.Errorf("expected %q in %q", want, got)
		}
	}
}

func TestFormatsTableCovers10(t *testing.T) {
	required := []string{"email", "uuid", "ipv4", "ipv6", "url", "uri", "hostname", "date", "date-time", "time"}
	for _, name := range required {
		if _, ok := formatRegexps[name]; !ok {
			t.Errorf("formatRegexps missing %q", name)
		}
	}
}
