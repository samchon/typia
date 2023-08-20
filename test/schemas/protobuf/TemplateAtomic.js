//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function TemplateAtomic$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.prefix=r.string()
  break
  }
  case 2: {
  m.postfix=r.string()
  break
  }
  case 3: {
  m.middleString=r.string()
  break
  }
  case 4: {
  m.middleStringEmpty=r.string()
  break
  }
  case 5: {
  m.middleNumeric=r.string()
  break
  }
  case 6: {
  m.middleBoolean=r.string()
  break
  }
  case 7: {
  m.ipv4=r.string()
  break
  }
  case 8: {
  m.email=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("prefix"))
  throw util.ProtocolError("missing required 'prefix'",{instance:m})
  if(!m.hasOwnProperty("postfix"))
  throw util.ProtocolError("missing required 'postfix'",{instance:m})
  if(!m.hasOwnProperty("middleString"))
  throw util.ProtocolError("missing required 'middleString'",{instance:m})
  if(!m.hasOwnProperty("middleStringEmpty"))
  throw util.ProtocolError("missing required 'middleStringEmpty'",{instance:m})
  if(!m.hasOwnProperty("middleNumeric"))
  throw util.ProtocolError("missing required 'middleNumeric'",{instance:m})
  if(!m.hasOwnProperty("middleBoolean"))
  throw util.ProtocolError("missing required 'middleBoolean'",{instance:m})
  if(!m.hasOwnProperty("ipv4"))
  throw util.ProtocolError("missing required 'ipv4'",{instance:m})
  if(!m.hasOwnProperty("email"))
  throw util.ProtocolError("missing required 'email'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function TemplateAtomic$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.prefix)
  w.uint32(18).string(m.postfix)
  w.uint32(26).string(m.middleString)
  w.uint32(34).string(m.middleStringEmpty)
  w.uint32(42).string(m.middleNumeric)
  w.uint32(50).string(m.middleBoolean)
  w.uint32(58).string(m.ipv4)
  w.uint32(66).string(m.email)
  return w
}