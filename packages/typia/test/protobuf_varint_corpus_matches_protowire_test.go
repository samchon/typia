package typiatest

import (
  "encoding/hex"
  "path/filepath"
  "strconv"
  "testing"

  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
  "google.golang.org/protobuf/encoding/protowire"
)

// TestProtobufVarintCorpusMatchesProtowire verifies the shared varint corpus
// still describes the official Protobuf parser.
//
// This test pins the third-party oracle, and only that. Go cannot execute
// typia's TypeScript reader — the transform suites that run emitted JavaScript
// stub every `typia/lib/internal` import away — so a Go test can never witness
// a typia regression here, and this one does not claim to. The coupling lives
// in `protobuf_varint_corpus.json` instead: this test proves the corpus still
// matches `protowire`, and the `test_protobuf_reader_varint_bounds` and
// `test_protobuf_decode_varint_bounds` regressions read the same bytes and the
// same verdicts through typia's reader and generated decoders. A
// `google.golang.org/protobuf` upgrade that changed a verdict therefore fails
// the build here rather than leaving those expectations quietly stale.
//
//  1. Require every corpus entry to be internally consistent with the wire rule.
//  2. Require protowire to return exactly the recorded width, value, and error code.
//  3. Require the same verdict when the varint stands in a tag, a length prefix,
//     and a whole field, so the fault belongs to the varint and not to a position.
func TestProtobufVarintCorpusMatchesProtowire(t *testing.T) {
  corpus := testutil.ReadJSON[protobufVarintCorpus](t, filepath.Join(
    testutil.RepoRoot(t),
    "packages", "typia", "test", "protobuf_varint_corpus.json",
  ))
  if len(corpus.Entries) == 0 {
    t.Fatal("the shared varint corpus is empty, so this test proved nothing")
  }

  seen := map[string]bool{}
  for _, entry := range corpus.Entries {
    if seen[entry.Name] {
      t.Fatalf("corpus entry %q is declared twice", entry.Name)
    }
    seen[entry.Name] = true

    t.Run(entry.Name, func(t *testing.T) {
      bytes, err := hex.DecodeString(entry.Bytes)
      if err != nil {
        t.Fatalf("corpus bytes %q are not hexadecimal: %v", entry.Bytes, err)
      }
      protobufVarintCorpusRequireConsistency(t, entry, bytes)

      value, n := protowire.ConsumeVarint(bytes)
      if n != entry.Consumed {
        t.Fatalf("ConsumeVarint consumed %d instead of the recorded %d", n, entry.Consumed)
      }
      if entry.Fault == "" {
        want, err := strconv.ParseUint(entry.Value, 10, 64)
        if err != nil {
          t.Fatalf("corpus value %q is not an unsigned 64-bit integer: %v", entry.Value, err)
        }
        if value != want {
          t.Fatalf("ConsumeVarint decoded %d instead of the recorded %d", value, want)
        }
        return
      }

      // A rejected varint carries its fault into every framing position, so a
      // consumer cannot launder it by reading the same bytes as a tag or as a
      // length. Only the leading byte is replaced, and only by another
      // continuation byte, so the varint keeps its recorded width.
      if len(bytes) == 0 {
        return
      }
      if bytes[0]&0x80 == 0 {
        t.Fatalf("rejected corpus entry must open with a continuation byte, not %#02x", bytes[0])
      }
      tag := append([]byte{0x88}, bytes[1:]...)
      if _, _, n := protowire.ConsumeTag(tag); n != entry.Consumed {
        t.Fatalf("ConsumeTag consumed %d instead of the recorded %d", n, entry.Consumed)
      }
      if _, n := protowire.ConsumeBytes(bytes); n != entry.Consumed {
        t.Fatalf("ConsumeBytes consumed %d instead of the recorded %d", n, entry.Consumed)
      }
      field := append([]byte{0x0a}, bytes...)
      if _, _, n := protowire.ConsumeField(field); n != entry.Consumed {
        t.Fatalf("ConsumeField consumed %d instead of the recorded %d", n, entry.Consumed)
      }
    })
  }
  t.Logf("executed %d corpus entries against protowire", len(corpus.Entries))
}

// protobufVarintCorpusRequireConsistency rejects a corpus entry whose recorded
// fault disagrees with its own bytes.
//
// Without this the corpus could name a fault class the bytes do not exhibit,
// and both readers would faithfully assert the wrong message. The wire rule is
// that a varint occupies at most ten bytes and its tenth byte carries bit 63
// alone, so the class is decided by that byte.
func protobufVarintCorpusRequireConsistency(t *testing.T, entry protobufVarintEntry, bytes []byte) {
  t.Helper()
  switch entry.Fault {
  case "":
    if entry.Consumed != len(bytes) {
      t.Fatalf("an accepted entry must consume all %d bytes, not %d", len(bytes), entry.Consumed)
    }
    if entry.Value == "" {
      t.Fatal("an accepted entry must record the decoded value")
    }
    return
  case "truncated":
    if entry.Consumed != -1 {
      t.Fatalf("a truncated entry must record -1, not %d", entry.Consumed)
    }
    if len(bytes) >= 10 {
      t.Fatalf("a %d-byte entry is long enough to terminate, so it is not truncated", len(bytes))
    }
  case "overlong":
    if entry.Consumed != -3 {
      t.Fatalf("an overlong entry must record -3, not %d", entry.Consumed)
    }
    if len(bytes) < 10 || bytes[9]&0x80 == 0 {
      t.Fatal("an overlong entry must carry the continuation bit in its tenth byte")
    }
  case "overflow":
    if entry.Consumed != -3 {
      t.Fatalf("an overflow entry must record -3, not %d", entry.Consumed)
    }
    if len(bytes) < 10 || bytes[9]&0x80 != 0 || bytes[9] <= 0x01 {
      t.Fatal("an overflow entry must terminate on a tenth byte carrying payload above bit 63")
    }
  default:
    t.Fatalf("unknown fault class %q", entry.Fault)
  }
  if entry.Value != "" {
    t.Fatalf("a rejected entry must record no value, but records %q", entry.Value)
  }
}

// protobufVarintCorpus mirrors `protobuf_varint_corpus.json`. Its prose fields
// are deliberately absent: they document the file for its readers, and reading
// them back here would assert nothing.
type protobufVarintCorpus struct {
  Entries []protobufVarintEntry `json:"entries"`
}

// protobufVarintEntry is one corpus row. `Value` and `Fault` are JSON `null`
// where they do not apply, which unmarshals to the empty string.
type protobufVarintEntry struct {
  Name     string `json:"name"`
  Bytes    string `json:"bytes"`
  Consumed int    `json:"consumed"`
  Value    string `json:"value"`
  Fault    string `json:"fault"`
}
