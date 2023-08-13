//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function ObjectUnionCompositePointer$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.value!=null&&m.value.length){
  for(var i=0;i<m.value.length;++i)
  types[0].encode(m.value[i],w.uint32(10).fork()).ldelim()
  }
  return w
}
function IPointer_lt_IPoint_space__or__space_ILine_space__or__space_ITriangle_space__or__space_IRectangle_space__or__space_IPolyline_space__or__space_IPolygon_space__or__space_IPointedShape_space__or__space_ICircle_gt_$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.v1!=null&&Object.hasOwnProperty.call(m,"v1"))
  types[0].encode(m.v1,w.uint32(10).fork()).ldelim()
  if(m.v2!=null&&Object.hasOwnProperty.call(m,"v2"))
  types[1].encode(m.v2,w.uint32(18).fork()).ldelim()
  if(m.v3!=null&&Object.hasOwnProperty.call(m,"v3"))
  types[2].encode(m.v3,w.uint32(26).fork()).ldelim()
  if(m.v4!=null&&Object.hasOwnProperty.call(m,"v4"))
  types[3].encode(m.v4,w.uint32(34).fork()).ldelim()
  if(m.v5!=null&&Object.hasOwnProperty.call(m,"v5"))
  types[4].encode(m.v5,w.uint32(42).fork()).ldelim()
  if(m.v6!=null&&Object.hasOwnProperty.call(m,"v6"))
  types[5].encode(m.v6,w.uint32(50).fork()).ldelim()
  if(m.v7!=null&&Object.hasOwnProperty.call(m,"v7"))
  types[6].encode(m.v7,w.uint32(58).fork()).ldelim()
  if(m.v8!=null&&Object.hasOwnProperty.call(m,"v8"))
  types[7].encode(m.v8,w.uint32(66).fork()).ldelim()
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
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
function IPointer_lt_IPoint_space__or__space_ILine_space__or__space_ITriangle_space__or__space_IRectangle_space__or__space_IPolyline_space__or__space_IPolygon_space__or__space_IPointedShape_space__or__space_ICircle_gt_$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.v1=types[0].decode(r,r.uint32())
  break
  }
  case 2: {
  m.v2=types[1].decode(r,r.uint32())
  break
  }
  case 3: {
  m.v3=types[2].decode(r,r.uint32())
  break
  }
  case 4: {
  m.v4=types[3].decode(r,r.uint32())
  break
  }
  case 5: {
  m.v5=types[4].decode(r,r.uint32())
  break
  }
  case 6: {
  m.v6=types[5].decode(r,r.uint32())
  break
  }
  case 7: {
  m.v7=types[6].decode(r,r.uint32())
  break
  }
  case 8: {
  m.v8=types[7].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}