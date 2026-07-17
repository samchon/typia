package utils

import "strings"

type protobufNameEncoderNamespace struct{}

var ProtobufNameEncoder = protobufNameEncoderNamespace{}

func (protobufNameEncoderNamespace) Encode(str string) string {
  for _, replacer := range protobufNameEncoder_replacers {
    str = strings.ReplaceAll(str, replacer.Before, replacer.After)
  }
  return str
}

func (protobufNameEncoderNamespace) Decode(str string) string {
  for _, replacer := range protobufNameEncoder_replacers {
    if replacer.After != "" {
      str = strings.ReplaceAll(str, replacer.After, replacer.Before)
    }
  }
  return str
}

type protobufNameEncoder_replacer struct {
  Before string
  After  string
}

var protobufNameEncoder_replacers = []protobufNameEncoder_replacer{
  {Before: "$", After: "_dollar_"},
  {Before: "&", After: "_and_"},
  {Before: "|", After: "_or_"},
  {Before: "{", After: "_blt_"},
  {Before: "}", After: "_bgt_"},
  {Before: "<", After: "_lt_"},
  {Before: ">", After: "_gt_"},
  {Before: "(", After: "_lp_"},
  {Before: ")", After: "_rp_"},
  {Before: "[", After: "_alt_"},
  {Before: "]", After: "_agt_"},
  {Before: ",", After: "_comma_"},
  {Before: "`", After: "_backquote_"},
  {Before: "'", After: "_singlequote_"},
  {Before: "\"", After: "_doublequote_"},
  {Before: " ", After: "_space_"},
  // A Protocol Buffers message name is an identifier, so a hyphen has to be
  // encoded like any other rune the grammar rejects. It is not exotic: the
  // metadata collection joins a duplicated name's counter with one, and a
  // quoted type argument can carry one of its own, as `Gen<"a-b">` does. The
  // dot is deliberately absent from this table — `protobufMessageProgrammer_emplace`
  // splits a name on it to nest a namespace member in its parent's message, and
  // a qualified reference is legal in the grammar.
  {Before: "-", After: "_hyphen_"},
}
