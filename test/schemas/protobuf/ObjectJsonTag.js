//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function ObjectJsonTag$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.vulnerable)
  w.uint32(18).string(m.description)
  w.uint32(26).string(m.title)
  w.uint32(34).string(m.complicateTitle)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function ObjectJsonTag$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.vulnerable=r.string()
  break
  }
  case 2: {
  m.description=r.string()
  break
  }
  case 3: {
  m.title=r.string()
  break
  }
  case 4: {
  m.complicateTitle=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("vulnerable"))
  throw util.ProtocolError("missing required 'vulnerable'",{instance:m})
  if(!m.hasOwnProperty("description"))
  throw util.ProtocolError("missing required 'description'",{instance:m})
  if(!m.hasOwnProperty("title"))
  throw util.ProtocolError("missing required 'title'",{instance:m})
  if(!m.hasOwnProperty("complicateTitle"))
  throw util.ProtocolError("missing required 'complicateTitle'",{instance:m})
  return m
}