//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function ClassNonPublic$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
function Accessor$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.implicit=r.string()
  break
  }
  case 2: {
  m.shown=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("implicit"))
  throw util.ProtocolError("missing required 'implicit'",{instance:m})
  if(!m.hasOwnProperty("shown"))
  throw util.ProtocolError("missing required 'shown'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function ClassNonPublic$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function Accessor$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.implicit)
  w.uint32(18).string(m.shown)
  return w
}