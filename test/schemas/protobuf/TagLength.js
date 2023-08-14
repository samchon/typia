//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message TagLength {
//     repeated TagLength.Type value = 1;
//     message Type {
//         required string fixed = 1;
//         required string minimum = 2;
//         required string maximum = 3;
//         required string minimum_and_maximum = 4;
//         required string equal = 5;
//     }
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function TagLength$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.value!=null&&m.value.length){
  for(var i=0;i<m.value.length;++i)
  types[0].encode(m.value[i],w.uint32(10).fork()).ldelim()
  }
  return w
}
function Type$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.fixed)
  w.uint32(18).string(m.minimum)
  w.uint32(26).string(m.maximum)
  w.uint32(34).string(m.minimumAndMaximum)
  w.uint32(42).string(m.equal)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function TagLength$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  if(!(m.value&&m.value.length))
  m.value=[]
  m.value.push(types[0].decode(r,r.uint32()))
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
function Type$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.fixed=r.string()
  break
  }
  case 2: {
  m.minimum=r.string()
  break
  }
  case 3: {
  m.maximum=r.string()
  break
  }
  case 4: {
  m.minimumAndMaximum=r.string()
  break
  }
  case 5: {
  m.equal=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("fixed"))
  throw util.ProtocolError("missing required 'fixed'",{instance:m})
  if(!m.hasOwnProperty("minimum"))
  throw util.ProtocolError("missing required 'minimum'",{instance:m})
  if(!m.hasOwnProperty("maximum"))
  throw util.ProtocolError("missing required 'maximum'",{instance:m})
  if(!m.hasOwnProperty("minimumAndMaximum"))
  throw util.ProtocolError("missing required 'minimumAndMaximum'",{instance:m})
  if(!m.hasOwnProperty("equal"))
  throw util.ProtocolError("missing required 'equal'",{instance:m})
  return m
}