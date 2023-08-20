//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function ArrayRecursive$decode(r,l){
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
function ICategory$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  if(!(m.children&&m.children.length))
  m.children=[]
  m.children.push(types[0].decode(r,r.uint32()))
  break
  }
  case 2: {
  m.id=r.double()
  break
  }
  case 3: {
  m.code=r.string()
  break
  }
  case 4: {
  m.sequence=r.double()
  break
  }
  case 5: {
  m.createdAt=types[4].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("code"))
  throw util.ProtocolError("missing required 'code'",{instance:m})
  if(!m.hasOwnProperty("sequence"))
  throw util.ProtocolError("missing required 'sequence'",{instance:m})
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
  return m
}
function ITimestamp$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.time=r.double()
  break
  }
  case 2: {
  m.zone=r.double()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("time"))
  throw util.ProtocolError("missing required 'time'",{instance:m})
  if(!m.hasOwnProperty("zone"))
  throw util.ProtocolError("missing required 'zone'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function ArrayRecursive$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function ICategory$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.children!=null&&m.children.length){
  for(var i=0;i<m.children.length;++i)
  types[0].encode(m.children[i],w.uint32(10).fork()).ldelim()
  }
  w.uint32(17).double(m.id)
  w.uint32(26).string(m.code)
  w.uint32(33).double(m.sequence)
  types[4].encode(m.createdAt,w.uint32(42).fork()).ldelim()
  return w
}
function ITimestamp$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.time)
  w.uint32(17).double(m.zone)
  return w
}