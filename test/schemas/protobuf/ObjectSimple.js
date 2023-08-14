//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message ObjectSimple {
//     message IBox3D {
//         required ObjectSimple.IPoint3D scale = 1;
//         required ObjectSimple.IPoint3D position = 2;
//         required ObjectSimple.IPoint3D rotate = 3;
//         required ObjectSimple.IPoint3D pivot = 4;
//     }
// 
//     message IPoint3D {
//         required double x = 1;
//         required double y = 2;
//         required double z = 3;
//     }
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function ObjectSimple$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function IBox3D$encode(m,w){
  if(!w)
  w=Writer.create()
  types[0].encode(m.scale,w.uint32(10).fork()).ldelim()
  types[1].encode(m.position,w.uint32(18).fork()).ldelim()
  types[2].encode(m.rotate,w.uint32(26).fork()).ldelim()
  types[3].encode(m.pivot,w.uint32(34).fork()).ldelim()
  return w
}
function IPoint3D$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.x)
  w.uint32(17).double(m.y)
  w.uint32(25).double(m.z)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function ObjectSimple$decode(r,l){
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
function IBox3D$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.scale=types[0].decode(r,r.uint32())
  break
  }
  case 2: {
  m.position=types[1].decode(r,r.uint32())
  break
  }
  case 3: {
  m.rotate=types[2].decode(r,r.uint32())
  break
  }
  case 4: {
  m.pivot=types[3].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("scale"))
  throw util.ProtocolError("missing required 'scale'",{instance:m})
  if(!m.hasOwnProperty("position"))
  throw util.ProtocolError("missing required 'position'",{instance:m})
  if(!m.hasOwnProperty("rotate"))
  throw util.ProtocolError("missing required 'rotate'",{instance:m})
  if(!m.hasOwnProperty("pivot"))
  throw util.ProtocolError("missing required 'pivot'",{instance:m})
  return m
}
function IPoint3D$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.x=r.double()
  break
  }
  case 2: {
  m.y=r.double()
  break
  }
  case 3: {
  m.z=r.double()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("x"))
  throw util.ProtocolError("missing required 'x'",{instance:m})
  if(!m.hasOwnProperty("y"))
  throw util.ProtocolError("missing required 'y'",{instance:m})
  if(!m.hasOwnProperty("z"))
  throw util.ProtocolError("missing required 'z'",{instance:m})
  return m
}