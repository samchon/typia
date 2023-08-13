//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function TagFormat$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.uuid)
  w.uint32(18).string(m.email)
  w.uint32(26).string(m.url)
  w.uint32(34).string(m.ipv4)
  w.uint32(42).string(m.ipv6)
  w.uint32(50).string(m.date)
  w.uint32(58).string(m.dateTime)
  w.uint32(66).string(m.custom)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function TagFormat$decode(r,l){
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
  m.url=r.string()
  break
  }
  case 4: {
  m.ipv4=r.string()
  break
  }
  case 5: {
  m.ipv6=r.string()
  break
  }
  case 6: {
  m.date=r.string()
  break
  }
  case 7: {
  m.dateTime=r.string()
  break
  }
  case 8: {
  m.custom=r.string()
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
  if(!m.hasOwnProperty("url"))
  throw util.ProtocolError("missing required 'url'",{instance:m})
  if(!m.hasOwnProperty("ipv4"))
  throw util.ProtocolError("missing required 'ipv4'",{instance:m})
  if(!m.hasOwnProperty("ipv6"))
  throw util.ProtocolError("missing required 'ipv6'",{instance:m})
  if(!m.hasOwnProperty("date"))
  throw util.ProtocolError("missing required 'date'",{instance:m})
  if(!m.hasOwnProperty("dateTime"))
  throw util.ProtocolError("missing required 'dateTime'",{instance:m})
  if(!m.hasOwnProperty("custom"))
  throw util.ProtocolError("missing required 'custom'",{instance:m})
  return m
}