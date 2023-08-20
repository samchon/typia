//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function TagPattern$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.uuid=r.string()
  break
  }
  case 2: {
  m.email=r.string()
  break
  }
  case 3: {
  m.ipv4=r.string()
  break
  }
  case 4: {
  m.ipv6=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("uuid"))
  throw util.ProtocolError("missing required 'uuid'",{instance:m})
  if(!m.hasOwnProperty("email"))
  throw util.ProtocolError("missing required 'email'",{instance:m})
  if(!m.hasOwnProperty("ipv4"))
  throw util.ProtocolError("missing required 'ipv4'",{instance:m})
  if(!m.hasOwnProperty("ipv6"))
  throw util.ProtocolError("missing required 'ipv6'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function TagPattern$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.uuid)
  w.uint32(18).string(m.email)
  w.uint32(26).string(m.ipv4)
  w.uint32(34).string(m.ipv6)
  return w
}