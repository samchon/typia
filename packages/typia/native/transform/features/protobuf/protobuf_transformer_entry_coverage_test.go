package protobuf

import (
	"testing"

	nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

// TestProtobufTransformerEntryCoverage exercises protobuf transform entrypoints.
//
// Protobuf encode/decode programmers have separate unit tests, but the
// transform package exposes many scalar and factory wrappers. Empty transform
// props cover their generic-argument and input-value guard paths without
// requiring a full compiler program.
//
// 1. Visit decode and encode scalar wrappers with assert/is/validate variants.
// 2. Visit create/factory decode wrappers.
// 3. Visit create/factory encode wrappers.
// 4. Visit message schema generation guard path.
func TestProtobufTransformerEntryCoverage(t *testing.T) {
	props := nativetransform.ITransformProps{}
	for _, run := range []func(){
		func() { ProtobufDecodeTransformer.Transform(props) },
		func() { ProtobufAssertDecodeTransformer.Transform(props) },
		func() { ProtobufIsDecodeTransformer.Transform(props) },
		func() { ProtobufValidateDecodeTransformer.Transform(props) },
		func() { ProtobufEncodeTransformer.Transform(props) },
		func() { ProtobufAssertEncodeTransformer.Transform(props) },
		func() { ProtobufIsEncodeTransformer.Transform(props) },
		func() { ProtobufValidateEncodeTransformer.Transform(props) },
		func() { ProtobufCreateDecodeTransformer.Transform(props) },
		func() { ProtobufCreateAssertDecodeTransformer.Transform(props) },
		func() { ProtobufCreateIsDecodeTransformer.Transform(props) },
		func() { ProtobufCreateValidateDecodeTransformer.Transform(props) },
		func() { ProtobufCreateEncodeTransformer.Transform(props) },
		func() { ProtobufCreateAssertEncodeTransformer.Transform(props) },
		func() { ProtobufCreateIsEncodeTransformer.Transform(props) },
		func() { ProtobufCreateValidateEncodeTransformer.Transform(props) },
		func() { ProtobufMessageTransformer.Transform(props) },
	} {
		expectProtobufPanic(t, run)
	}
}

func expectProtobufPanic(t *testing.T, run func()) {
	t.Helper()
	defer func() {
		if recover() == nil {
			t.Fatal("expected protobuf transformer panic")
		}
	}()
	run()
}
