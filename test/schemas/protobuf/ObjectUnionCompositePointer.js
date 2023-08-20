//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function ObjectUnionCompositePointer$decode(r,l){
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
function IPoint$decode(r,l){
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
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("x"))
  throw util.ProtocolError("missing required 'x'",{instance:m})
  if(!m.hasOwnProperty("y"))
  throw util.ProtocolError("missing required 'y'",{instance:m})
  return m
}
function ILine$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.p1=types[0].decode(r,r.uint32())
  break
  }
  case 2: {
  m.p2=types[1].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("p1"))
  throw util.ProtocolError("missing required 'p1'",{instance:m})
  if(!m.hasOwnProperty("p2"))
  throw util.ProtocolError("missing required 'p2'",{instance:m})
  return m
}
function ITriangle$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.p1=types[0].decode(r,r.uint32())
  break
  }
  case 2: {
  m.p2=types[1].decode(r,r.uint32())
  break
  }
  case 3: {
  m.p3=types[2].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("p1"))
  throw util.ProtocolError("missing required 'p1'",{instance:m})
  if(!m.hasOwnProperty("p2"))
  throw util.ProtocolError("missing required 'p2'",{instance:m})
  if(!m.hasOwnProperty("p3"))
  throw util.ProtocolError("missing required 'p3'",{instance:m})
  return m
}
function IRectangle$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.p1=types[0].decode(r,r.uint32())
  break
  }
  case 2: {
  m.p2=types[1].decode(r,r.uint32())
  break
  }
  case 3: {
  m.p3=types[2].decode(r,r.uint32())
  break
  }
  case 4: {
  m.p4=types[3].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("p1"))
  throw util.ProtocolError("missing required 'p1'",{instance:m})
  if(!m.hasOwnProperty("p2"))
  throw util.ProtocolError("missing required 'p2'",{instance:m})
  if(!m.hasOwnProperty("p3"))
  throw util.ProtocolError("missing required 'p3'",{instance:m})
  if(!m.hasOwnProperty("p4"))
  throw util.ProtocolError("missing required 'p4'",{instance:m})
  return m
}
function IPolyline$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  if(!(m.points&&m.points.length))
  m.points=[]
  m.points.push(types[0].decode(r,r.uint32()))
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
function IPolygon$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.outer=types[0].decode(r,r.uint32())
  break
  }
  case 2: {
  if(!(m.inner&&m.inner.length))
  m.inner=[]
  m.inner.push(types[1].decode(r,r.uint32()))
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("outer"))
  throw util.ProtocolError("missing required 'outer'",{instance:m})
  return m
}
function IPointedShape$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  if(!(m.outer&&m.outer.length))
  m.outer=[]
  m.outer.push(types[0].decode(r,r.uint32()))
  break
  }
  case 2: {
  m.inner=types[1].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("inner"))
  throw util.ProtocolError("missing required 'inner'",{instance:m})
  return m
}
function ICircle$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.centroid=types[0].decode(r,r.uint32())
  break
  }
  case 2: {
  m.radius=r.double()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("centroid"))
  throw util.ProtocolError("missing required 'centroid'",{instance:m})
  if(!m.hasOwnProperty("radius"))
  throw util.ProtocolError("missing required 'radius'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function ObjectUnionCompositePointer$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.value!=null&&m.value.length){
  for(var i=0;i<m.value.length;++i)
  types[0].encode(m.value[i],w.uint32(10).fork()).ldelim()
  }
  return w
}
function IPoint$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.x)
  w.uint32(17).double(m.y)
  return w
}
function ILine$encode(m,w){
  if(!w)
  w=Writer.create()
  types[0].encode(m.p1,w.uint32(10).fork()).ldelim()
  types[1].encode(m.p2,w.uint32(18).fork()).ldelim()
  return w
}
function ITriangle$encode(m,w){
  if(!w)
  w=Writer.create()
  types[0].encode(m.p1,w.uint32(10).fork()).ldelim()
  types[1].encode(m.p2,w.uint32(18).fork()).ldelim()
  types[2].encode(m.p3,w.uint32(26).fork()).ldelim()
  return w
}
function IRectangle$encode(m,w){
  if(!w)
  w=Writer.create()
  types[0].encode(m.p1,w.uint32(10).fork()).ldelim()
  types[1].encode(m.p2,w.uint32(18).fork()).ldelim()
  types[2].encode(m.p3,w.uint32(26).fork()).ldelim()
  types[3].encode(m.p4,w.uint32(34).fork()).ldelim()
  return w
}
function IPolyline$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.points!=null&&m.points.length){
  for(var i=0;i<m.points.length;++i)
  types[0].encode(m.points[i],w.uint32(10).fork()).ldelim()
  }
  return w
}
function IPolygon$encode(m,w){
  if(!w)
  w=Writer.create()
  types[0].encode(m.outer,w.uint32(10).fork()).ldelim()
  if(m.inner!=null&&m.inner.length){
  for(var i=0;i<m.inner.length;++i)
  types[1].encode(m.inner[i],w.uint32(18).fork()).ldelim()
  }
  return w
}
function IPointedShape$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.outer!=null&&m.outer.length){
  for(var i=0;i<m.outer.length;++i)
  types[0].encode(m.outer[i],w.uint32(10).fork()).ldelim()
  }
  types[1].encode(m.inner,w.uint32(18).fork()).ldelim()
  return w
}
function ICircle$encode(m,w){
  if(!w)
  w=Writer.create()
  types[0].encode(m.centroid,w.uint32(10).fork()).ldelim()
  w.uint32(17).double(m.radius)
  return w
}