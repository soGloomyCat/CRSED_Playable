var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6290 = root || request.c( 'UnityEngine.JointSpring' )
  var i6291 = data
  i6290.spring = i6291[0]
  i6290.damper = i6291[1]
  i6290.targetPosition = i6291[2]
  return i6290
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6292 = root || request.c( 'UnityEngine.JointMotor' )
  var i6293 = data
  i6292.m_TargetVelocity = i6293[0]
  i6292.m_Force = i6293[1]
  i6292.m_FreeSpin = i6293[2]
  return i6292
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6294 = root || request.c( 'UnityEngine.JointLimits' )
  var i6295 = data
  i6294.m_Min = i6295[0]
  i6294.m_Max = i6295[1]
  i6294.m_Bounciness = i6295[2]
  i6294.m_BounceMinVelocity = i6295[3]
  i6294.m_ContactDistance = i6295[4]
  i6294.minBounce = i6295[5]
  i6294.maxBounce = i6295[6]
  return i6294
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6296 = root || request.c( 'UnityEngine.JointDrive' )
  var i6297 = data
  i6296.m_PositionSpring = i6297[0]
  i6296.m_PositionDamper = i6297[1]
  i6296.m_MaximumForce = i6297[2]
  return i6296
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6298 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6299 = data
  i6298.m_Spring = i6299[0]
  i6298.m_Damper = i6299[1]
  return i6298
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6300 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6301 = data
  i6300.m_Limit = i6301[0]
  i6300.m_Bounciness = i6301[1]
  i6300.m_ContactDistance = i6301[2]
  return i6300
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6302 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6303 = data
  i6302.m_ExtremumSlip = i6303[0]
  i6302.m_ExtremumValue = i6303[1]
  i6302.m_AsymptoteSlip = i6303[2]
  i6302.m_AsymptoteValue = i6303[3]
  i6302.m_Stiffness = i6303[4]
  return i6302
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6304 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6305 = data
  i6304.m_LowerAngle = i6305[0]
  i6304.m_UpperAngle = i6305[1]
  return i6304
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6306 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6307 = data
  i6306.m_MotorSpeed = i6307[0]
  i6306.m_MaximumMotorTorque = i6307[1]
  return i6306
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6308 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6309 = data
  i6308.m_DampingRatio = i6309[0]
  i6308.m_Frequency = i6309[1]
  i6308.m_Angle = i6309[2]
  return i6308
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6310 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6311 = data
  i6310.m_LowerTranslation = i6311[0]
  i6310.m_UpperTranslation = i6311[1]
  return i6310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6312 = root || new pc.UnityMaterial()
  var i6313 = data
  i6312.name = i6313[0]
  request.r(i6313[1], i6313[2], 0, i6312, 'shader')
  i6312.renderQueue = i6313[3]
  i6312.enableInstancing = !!i6313[4]
  var i6315 = i6313[5]
  var i6314 = []
  for(var i = 0; i < i6315.length; i += 1) {
    i6314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6315[i + 0]) );
  }
  i6312.floatParameters = i6314
  var i6317 = i6313[6]
  var i6316 = []
  for(var i = 0; i < i6317.length; i += 1) {
    i6316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6317[i + 0]) );
  }
  i6312.colorParameters = i6316
  var i6319 = i6313[7]
  var i6318 = []
  for(var i = 0; i < i6319.length; i += 1) {
    i6318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6319[i + 0]) );
  }
  i6312.vectorParameters = i6318
  var i6321 = i6313[8]
  var i6320 = []
  for(var i = 0; i < i6321.length; i += 1) {
    i6320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6321[i + 0]) );
  }
  i6312.textureParameters = i6320
  var i6323 = i6313[9]
  var i6322 = []
  for(var i = 0; i < i6323.length; i += 1) {
    i6322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6323[i + 0]) );
  }
  i6312.materialFlags = i6322
  return i6312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6327 = data
  i6326.name = i6327[0]
  i6326.value = i6327[1]
  return i6326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6331 = data
  i6330.name = i6331[0]
  i6330.value = new pc.Color(i6331[1], i6331[2], i6331[3], i6331[4])
  return i6330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6335 = data
  i6334.name = i6335[0]
  i6334.value = new pc.Vec4( i6335[1], i6335[2], i6335[3], i6335[4] )
  return i6334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6339 = data
  i6338.name = i6339[0]
  request.r(i6339[1], i6339[2], 0, i6338, 'value')
  return i6338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6343 = data
  i6342.name = i6343[0]
  i6342.enabled = !!i6343[1]
  return i6342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6345 = data
  i6344.position = new pc.Vec3( i6345[0], i6345[1], i6345[2] )
  i6344.scale = new pc.Vec3( i6345[3], i6345[4], i6345[5] )
  i6344.rotation = new pc.Quat(i6345[6], i6345[7], i6345[8], i6345[9])
  return i6344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6347 = data
  i6346.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6347[0], i6346.main)
  i6346.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6347[1], i6346.colorBySpeed)
  i6346.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6347[2], i6346.colorOverLifetime)
  i6346.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6347[3], i6346.emission)
  i6346.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6347[4], i6346.rotationBySpeed)
  i6346.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6347[5], i6346.rotationOverLifetime)
  i6346.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6347[6], i6346.shape)
  i6346.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6347[7], i6346.sizeBySpeed)
  i6346.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6347[8], i6346.sizeOverLifetime)
  i6346.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6347[9], i6346.textureSheetAnimation)
  i6346.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6347[10], i6346.velocityOverLifetime)
  i6346.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6347[11], i6346.noise)
  i6346.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6347[12], i6346.inheritVelocity)
  i6346.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6347[13], i6346.forceOverLifetime)
  i6346.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6347[14], i6346.limitVelocityOverLifetime)
  i6346.useAutoRandomSeed = !!i6347[15]
  i6346.randomSeed = i6347[16]
  return i6346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6348 = root || new pc.ParticleSystemMain()
  var i6349 = data
  i6348.duration = i6349[0]
  i6348.loop = !!i6349[1]
  i6348.prewarm = !!i6349[2]
  i6348.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6349[3], i6348.startDelay)
  i6348.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6349[4], i6348.startLifetime)
  i6348.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6349[5], i6348.startSpeed)
  i6348.startSize3D = !!i6349[6]
  i6348.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6349[7], i6348.startSizeX)
  i6348.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6349[8], i6348.startSizeY)
  i6348.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6349[9], i6348.startSizeZ)
  i6348.startRotation3D = !!i6349[10]
  i6348.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6349[11], i6348.startRotationX)
  i6348.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6349[12], i6348.startRotationY)
  i6348.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6349[13], i6348.startRotationZ)
  i6348.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6349[14], i6348.startColor)
  i6348.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6349[15], i6348.gravityModifier)
  i6348.simulationSpace = i6349[16]
  request.r(i6349[17], i6349[18], 0, i6348, 'customSimulationSpace')
  i6348.simulationSpeed = i6349[19]
  i6348.useUnscaledTime = !!i6349[20]
  i6348.scalingMode = i6349[21]
  i6348.playOnAwake = !!i6349[22]
  i6348.maxParticles = i6349[23]
  i6348.emitterVelocityMode = i6349[24]
  i6348.stopAction = i6349[25]
  return i6348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6350 = root || new pc.MinMaxCurve()
  var i6351 = data
  i6350.mode = i6351[0]
  i6350.curveMin = new pc.AnimationCurve( { keys_flow: i6351[1] } )
  i6350.curveMax = new pc.AnimationCurve( { keys_flow: i6351[2] } )
  i6350.curveMultiplier = i6351[3]
  i6350.constantMin = i6351[4]
  i6350.constantMax = i6351[5]
  return i6350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6352 = root || new pc.MinMaxGradient()
  var i6353 = data
  i6352.mode = i6353[0]
  i6352.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6353[1], i6352.gradientMin)
  i6352.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6353[2], i6352.gradientMax)
  i6352.colorMin = new pc.Color(i6353[3], i6353[4], i6353[5], i6353[6])
  i6352.colorMax = new pc.Color(i6353[7], i6353[8], i6353[9], i6353[10])
  return i6352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6355 = data
  i6354.mode = i6355[0]
  var i6357 = i6355[1]
  var i6356 = []
  for(var i = 0; i < i6357.length; i += 1) {
    i6356.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6357[i + 0]) );
  }
  i6354.colorKeys = i6356
  var i6359 = i6355[2]
  var i6358 = []
  for(var i = 0; i < i6359.length; i += 1) {
    i6358.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6359[i + 0]) );
  }
  i6354.alphaKeys = i6358
  return i6354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6360 = root || new pc.ParticleSystemColorBySpeed()
  var i6361 = data
  i6360.enabled = !!i6361[0]
  i6360.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6361[1], i6360.color)
  i6360.range = new pc.Vec2( i6361[2], i6361[3] )
  return i6360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6365 = data
  i6364.color = new pc.Color(i6365[0], i6365[1], i6365[2], i6365[3])
  i6364.time = i6365[4]
  return i6364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6369 = data
  i6368.alpha = i6369[0]
  i6368.time = i6369[1]
  return i6368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6370 = root || new pc.ParticleSystemColorOverLifetime()
  var i6371 = data
  i6370.enabled = !!i6371[0]
  i6370.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6371[1], i6370.color)
  return i6370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6372 = root || new pc.ParticleSystemEmitter()
  var i6373 = data
  i6372.enabled = !!i6373[0]
  i6372.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[1], i6372.rateOverTime)
  i6372.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6373[2], i6372.rateOverDistance)
  var i6375 = i6373[3]
  var i6374 = []
  for(var i = 0; i < i6375.length; i += 1) {
    i6374.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6375[i + 0]) );
  }
  i6372.bursts = i6374
  return i6372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6378 = root || new pc.ParticleSystemBurst()
  var i6379 = data
  i6378.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6379[0], i6378.count)
  i6378.cycleCount = i6379[1]
  i6378.minCount = i6379[2]
  i6378.maxCount = i6379[3]
  i6378.repeatInterval = i6379[4]
  i6378.time = i6379[5]
  return i6378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6380 = root || new pc.ParticleSystemRotationBySpeed()
  var i6381 = data
  i6380.enabled = !!i6381[0]
  i6380.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6381[1], i6380.x)
  i6380.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6381[2], i6380.y)
  i6380.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6381[3], i6380.z)
  i6380.separateAxes = !!i6381[4]
  i6380.range = new pc.Vec2( i6381[5], i6381[6] )
  return i6380
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6382 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6383 = data
  i6382.enabled = !!i6383[0]
  i6382.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6383[1], i6382.x)
  i6382.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6383[2], i6382.y)
  i6382.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6383[3], i6382.z)
  i6382.separateAxes = !!i6383[4]
  return i6382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6384 = root || new pc.ParticleSystemShape()
  var i6385 = data
  i6384.enabled = !!i6385[0]
  i6384.shapeType = i6385[1]
  i6384.randomDirectionAmount = i6385[2]
  i6384.sphericalDirectionAmount = i6385[3]
  i6384.randomPositionAmount = i6385[4]
  i6384.alignToDirection = !!i6385[5]
  i6384.radius = i6385[6]
  i6384.radiusMode = i6385[7]
  i6384.radiusSpread = i6385[8]
  i6384.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6385[9], i6384.radiusSpeed)
  i6384.radiusThickness = i6385[10]
  i6384.angle = i6385[11]
  i6384.length = i6385[12]
  i6384.boxThickness = new pc.Vec3( i6385[13], i6385[14], i6385[15] )
  i6384.meshShapeType = i6385[16]
  request.r(i6385[17], i6385[18], 0, i6384, 'mesh')
  request.r(i6385[19], i6385[20], 0, i6384, 'meshRenderer')
  request.r(i6385[21], i6385[22], 0, i6384, 'skinnedMeshRenderer')
  i6384.useMeshMaterialIndex = !!i6385[23]
  i6384.meshMaterialIndex = i6385[24]
  i6384.useMeshColors = !!i6385[25]
  i6384.normalOffset = i6385[26]
  i6384.arc = i6385[27]
  i6384.arcMode = i6385[28]
  i6384.arcSpread = i6385[29]
  i6384.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6385[30], i6384.arcSpeed)
  i6384.donutRadius = i6385[31]
  i6384.position = new pc.Vec3( i6385[32], i6385[33], i6385[34] )
  i6384.rotation = new pc.Vec3( i6385[35], i6385[36], i6385[37] )
  i6384.scale = new pc.Vec3( i6385[38], i6385[39], i6385[40] )
  return i6384
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6386 = root || new pc.ParticleSystemSizeBySpeed()
  var i6387 = data
  i6386.enabled = !!i6387[0]
  i6386.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6387[1], i6386.x)
  i6386.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6387[2], i6386.y)
  i6386.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6387[3], i6386.z)
  i6386.separateAxes = !!i6387[4]
  i6386.range = new pc.Vec2( i6387[5], i6387[6] )
  return i6386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6388 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6389 = data
  i6388.enabled = !!i6389[0]
  i6388.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6389[1], i6388.x)
  i6388.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6389[2], i6388.y)
  i6388.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6389[3], i6388.z)
  i6388.separateAxes = !!i6389[4]
  return i6388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6390 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6391 = data
  i6390.enabled = !!i6391[0]
  i6390.mode = i6391[1]
  i6390.animation = i6391[2]
  i6390.numTilesX = i6391[3]
  i6390.numTilesY = i6391[4]
  i6390.useRandomRow = !!i6391[5]
  i6390.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6391[6], i6390.frameOverTime)
  i6390.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6391[7], i6390.startFrame)
  i6390.cycleCount = i6391[8]
  i6390.rowIndex = i6391[9]
  i6390.flipU = i6391[10]
  i6390.flipV = i6391[11]
  i6390.spriteCount = i6391[12]
  var i6393 = i6391[13]
  var i6392 = []
  for(var i = 0; i < i6393.length; i += 2) {
  request.r(i6393[i + 0], i6393[i + 1], 2, i6392, '')
  }
  i6390.sprites = i6392
  return i6390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6396 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6397 = data
  i6396.enabled = !!i6397[0]
  i6396.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6397[1], i6396.x)
  i6396.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6397[2], i6396.y)
  i6396.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6397[3], i6396.z)
  i6396.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6397[4], i6396.speedModifier)
  i6396.space = i6397[5]
  return i6396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6398 = root || new pc.ParticleSystemNoise()
  var i6399 = data
  i6398.enabled = !!i6399[0]
  i6398.separateAxes = !!i6399[1]
  i6398.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6399[2], i6398.strengthX)
  i6398.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6399[3], i6398.strengthY)
  i6398.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6399[4], i6398.strengthZ)
  i6398.frequency = i6399[5]
  i6398.damping = !!i6399[6]
  i6398.octaveCount = i6399[7]
  i6398.octaveMultiplier = i6399[8]
  i6398.octaveScale = i6399[9]
  i6398.quality = i6399[10]
  i6398.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6399[11], i6398.scrollSpeed)
  i6398.scrollSpeedMultiplier = i6399[12]
  i6398.remapEnabled = !!i6399[13]
  i6398.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6399[14], i6398.remapX)
  i6398.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6399[15], i6398.remapY)
  i6398.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6399[16], i6398.remapZ)
  i6398.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6399[17], i6398.positionAmount)
  i6398.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6399[18], i6398.rotationAmount)
  i6398.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6399[19], i6398.sizeAmount)
  return i6398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6400 = root || new pc.ParticleSystemInheritVelocity()
  var i6401 = data
  i6400.enabled = !!i6401[0]
  i6400.mode = i6401[1]
  i6400.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6401[2], i6400.curve)
  return i6400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6402 = root || new pc.ParticleSystemForceOverLifetime()
  var i6403 = data
  i6402.enabled = !!i6403[0]
  i6402.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6403[1], i6402.x)
  i6402.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6403[2], i6402.y)
  i6402.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6403[3], i6402.z)
  i6402.space = i6403[4]
  i6402.randomized = !!i6403[5]
  return i6402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6404 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6405 = data
  i6404.enabled = !!i6405[0]
  i6404.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6405[1], i6404.limitX)
  i6404.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6405[2], i6404.limitY)
  i6404.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6405[3], i6404.limitZ)
  i6404.dampen = i6405[4]
  i6404.separateAxes = !!i6405[5]
  i6404.space = i6405[6]
  i6404.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6405[7], i6404.drag)
  i6404.multiplyDragByParticleSize = !!i6405[8]
  i6404.multiplyDragByParticleVelocity = !!i6405[9]
  return i6404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6407 = data
  i6406.enabled = !!i6407[0]
  request.r(i6407[1], i6407[2], 0, i6406, 'sharedMaterial')
  var i6409 = i6407[3]
  var i6408 = []
  for(var i = 0; i < i6409.length; i += 2) {
  request.r(i6409[i + 0], i6409[i + 1], 2, i6408, '')
  }
  i6406.sharedMaterials = i6408
  i6406.receiveShadows = !!i6407[4]
  i6406.shadowCastingMode = i6407[5]
  i6406.sortingLayerID = i6407[6]
  i6406.sortingOrder = i6407[7]
  i6406.lightmapIndex = i6407[8]
  i6406.lightmapSceneIndex = i6407[9]
  i6406.lightmapScaleOffset = new pc.Vec4( i6407[10], i6407[11], i6407[12], i6407[13] )
  i6406.lightProbeUsage = i6407[14]
  i6406.reflectionProbeUsage = i6407[15]
  request.r(i6407[16], i6407[17], 0, i6406, 'mesh')
  i6406.meshCount = i6407[18]
  i6406.activeVertexStreamsCount = i6407[19]
  i6406.alignment = i6407[20]
  i6406.renderMode = i6407[21]
  i6406.sortMode = i6407[22]
  i6406.lengthScale = i6407[23]
  i6406.velocityScale = i6407[24]
  i6406.cameraVelocityScale = i6407[25]
  i6406.normalDirection = i6407[26]
  i6406.sortingFudge = i6407[27]
  i6406.minParticleSize = i6407[28]
  i6406.maxParticleSize = i6407[29]
  i6406.pivot = new pc.Vec3( i6407[30], i6407[31], i6407[32] )
  request.r(i6407[33], i6407[34], 0, i6406, 'trailMaterial')
  return i6406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6413 = data
  i6412.name = i6413[0]
  i6412.tag = i6413[1]
  i6412.enabled = !!i6413[2]
  i6412.isStatic = !!i6413[3]
  i6412.layer = i6413[4]
  return i6412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6415 = data
  i6414.name = i6415[0]
  i6414.width = i6415[1]
  i6414.height = i6415[2]
  i6414.mipmapCount = i6415[3]
  i6414.anisoLevel = i6415[4]
  i6414.filterMode = i6415[5]
  i6414.hdr = !!i6415[6]
  i6414.format = i6415[7]
  i6414.wrapMode = i6415[8]
  i6414.alphaIsTransparency = !!i6415[9]
  i6414.alphaSource = i6415[10]
  return i6414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i6416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i6417 = data
  request.r(i6417[0], i6417[1], 0, i6416, 'sharedMesh')
  return i6416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i6418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i6419 = data
  request.r(i6419[0], i6419[1], 0, i6418, 'additionalVertexStreams')
  i6418.enabled = !!i6419[2]
  request.r(i6419[3], i6419[4], 0, i6418, 'sharedMaterial')
  var i6421 = i6419[5]
  var i6420 = []
  for(var i = 0; i < i6421.length; i += 2) {
  request.r(i6421[i + 0], i6421[i + 1], 2, i6420, '')
  }
  i6418.sharedMaterials = i6420
  i6418.receiveShadows = !!i6419[6]
  i6418.shadowCastingMode = i6419[7]
  i6418.sortingLayerID = i6419[8]
  i6418.sortingOrder = i6419[9]
  i6418.lightmapIndex = i6419[10]
  i6418.lightmapSceneIndex = i6419[11]
  i6418.lightmapScaleOffset = new pc.Vec4( i6419[12], i6419[13], i6419[14], i6419[15] )
  i6418.lightProbeUsage = i6419[16]
  i6418.reflectionProbeUsage = i6419[17]
  return i6418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i6422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i6423 = data
  i6422.name = i6423[0]
  i6422.halfPrecision = !!i6423[1]
  i6422.vertexCount = i6423[2]
  i6422.aabb = i6423[3]
  var i6425 = i6423[4]
  var i6424 = []
  for(var i = 0; i < i6425.length; i += 1) {
    i6424.push( !!i6425[i + 0] );
  }
  i6422.streams = i6424
  i6422.vertices = i6423[5]
  var i6427 = i6423[6]
  var i6426 = []
  for(var i = 0; i < i6427.length; i += 1) {
    i6426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i6427[i + 0]) );
  }
  i6422.subMeshes = i6426
  var i6429 = i6423[7]
  var i6428 = []
  for(var i = 0; i < i6429.length; i += 16) {
    i6428.push( new pc.Mat4().setData(i6429[i + 0], i6429[i + 1], i6429[i + 2], i6429[i + 3],  i6429[i + 4], i6429[i + 5], i6429[i + 6], i6429[i + 7],  i6429[i + 8], i6429[i + 9], i6429[i + 10], i6429[i + 11],  i6429[i + 12], i6429[i + 13], i6429[i + 14], i6429[i + 15]) );
  }
  i6422.bindposes = i6428
  var i6431 = i6423[8]
  var i6430 = []
  for(var i = 0; i < i6431.length; i += 1) {
    i6430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i6431[i + 0]) );
  }
  i6422.blendShapes = i6430
  return i6422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i6436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i6437 = data
  i6436.triangles = i6437[0]
  return i6436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6443 = data
  i6442.name = i6443[0]
  var i6445 = i6443[1]
  var i6444 = []
  for(var i = 0; i < i6445.length; i += 1) {
    i6444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6445[i + 0]) );
  }
  i6442.frames = i6444
  return i6442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i6446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i6447 = data
  i6446.name = i6447[0]
  i6446.atlasId = i6447[1]
  i6446.mipmapCount = i6447[2]
  i6446.hdr = !!i6447[3]
  i6446.size = i6447[4]
  i6446.anisoLevel = i6447[5]
  i6446.filterMode = i6447[6]
  i6446.wrapMode = i6447[7]
  var i6449 = i6447[8]
  var i6448 = []
  for(var i = 0; i < i6449.length; i += 4) {
    i6448.push( UnityEngine.Rect.MinMaxRect(i6449[i + 0], i6449[i + 1], i6449[i + 2], i6449[i + 3]) );
  }
  i6446.rects = i6448
  return i6446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6453 = data
  i6452.name = i6453[0]
  i6452.index = i6453[1]
  i6452.startup = !!i6453[2]
  return i6452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6455 = data
  i6454.enabled = !!i6455[0]
  i6454.aspect = i6455[1]
  i6454.orthographic = !!i6455[2]
  i6454.orthographicSize = i6455[3]
  i6454.backgroundColor = new pc.Color(i6455[4], i6455[5], i6455[6], i6455[7])
  i6454.nearClipPlane = i6455[8]
  i6454.farClipPlane = i6455[9]
  i6454.fieldOfView = i6455[10]
  i6454.depth = i6455[11]
  i6454.clearFlags = i6455[12]
  i6454.cullingMask = i6455[13]
  i6454.rect = i6455[14]
  request.r(i6455[15], i6455[16], 0, i6454, 'targetTexture')
  return i6454
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i6456 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i6457 = data
  i6456.m_ShowDebugText = !!i6457[0]
  i6456.m_ShowCameraFrustum = !!i6457[1]
  i6456.m_IgnoreTimeScale = !!i6457[2]
  request.r(i6457[3], i6457[4], 0, i6456, 'm_WorldUpOverride')
  i6456.m_UpdateMethod = i6457[5]
  i6456.m_BlendUpdateMethod = i6457[6]
  i6456.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i6457[7], i6456.m_DefaultBlend)
  request.r(i6457[8], i6457[9], 0, i6456, 'm_CustomBlends')
  i6456.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i6457[10], i6456.m_CameraCutEvent)
  i6456.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i6457[11], i6456.m_CameraActivatedEvent)
  return i6456
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i6458 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i6459 = data
  i6458.m_Style = i6459[0]
  i6458.m_Time = i6459[1]
  i6458.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i6459[2] } )
  return i6458
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i6460 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i6461 = data
  i6460.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6461[0], i6460.m_PersistentCalls)
  return i6460
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6462 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6463 = data
  var i6465 = i6463[0]
  var i6464 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6465.length; i += 1) {
    i6464.add(request.d('UnityEngine.Events.PersistentCall', i6465[i + 0]));
  }
  i6462.m_Calls = i6464
  return i6462
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6468 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6469 = data
  request.r(i6469[0], i6469[1], 0, i6468, 'm_Target')
  i6468.m_TargetAssemblyTypeName = i6469[2]
  i6468.m_MethodName = i6469[3]
  i6468.m_Mode = i6469[4]
  i6468.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6469[5], i6468.m_Arguments)
  i6468.m_CallState = i6469[6]
  return i6468
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i6470 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i6471 = data
  i6470.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6471[0], i6470.m_PersistentCalls)
  return i6470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6473 = data
  request.r(i6473[0], i6473[1], 0, i6472, 'clip')
  request.r(i6473[2], i6473[3], 0, i6472, 'outputAudioMixerGroup')
  i6472.playOnAwake = !!i6473[4]
  i6472.loop = !!i6473[5]
  i6472.time = i6473[6]
  i6472.volume = i6473[7]
  i6472.pitch = i6473[8]
  i6472.enabled = !!i6473[9]
  return i6472
}

Deserializers["SoundHandler"] = function (request, data, root) {
  var i6474 = root || request.c( 'SoundHandler' )
  var i6475 = data
  request.r(i6475[0], i6475[1], 0, i6474, '_audioSource')
  return i6474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i6476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i6477 = data
  i6476.enabled = !!i6477[0]
  i6476.type = i6477[1]
  i6476.color = new pc.Color(i6477[2], i6477[3], i6477[4], i6477[5])
  i6476.cullingMask = i6477[6]
  i6476.intensity = i6477[7]
  i6476.range = i6477[8]
  i6476.spotAngle = i6477[9]
  i6476.shadows = i6477[10]
  i6476.shadowNormalBias = i6477[11]
  i6476.shadowBias = i6477[12]
  i6476.shadowStrength = i6477[13]
  i6476.shadowResolution = i6477[14]
  i6476.lightmapBakeType = i6477[15]
  i6476.renderMode = i6477[16]
  request.r(i6477[17], i6477[18], 0, i6476, 'cookie')
  i6476.cookieSize = i6477[19]
  return i6476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i6478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i6479 = data
  request.r(i6479[0], i6479[1], 0, i6478, 'animatorController')
  i6478.updateMode = i6479[2]
  var i6481 = i6479[3]
  var i6480 = []
  for(var i = 0; i < i6481.length; i += 2) {
  request.r(i6481[i + 0], i6481[i + 1], 2, i6480, '')
  }
  i6478.humanBones = i6480
  i6478.enabled = !!i6479[4]
  return i6478
}

Deserializers["JumpHandler"] = function (request, data, root) {
  var i6484 = root || request.c( 'JumpHandler' )
  var i6485 = data
  request.r(i6485[0], i6485[1], 0, i6484, '_landJump')
  request.r(i6485[2], i6485[3], 0, i6484, '_secondLandJump')
  request.r(i6485[4], i6485[5], 0, i6484, '_spawnPoint')
  request.r(i6485[6], i6485[7], 0, i6484, '_enemy')
  request.r(i6485[8], i6485[9], 0, i6484, '_finalPoint')
  return i6484
}

Deserializers["AnimationHandler"] = function (request, data, root) {
  var i6486 = root || request.c( 'AnimationHandler' )
  var i6487 = data
  request.r(i6487[0], i6487[1], 0, i6486, '_jumpHandler')
  return i6486
}

Deserializers["EffectHandler"] = function (request, data, root) {
  var i6488 = root || request.c( 'EffectHandler' )
  var i6489 = data
  request.r(i6489[0], i6489[1], 0, i6488, '_jumpHandler')
  request.r(i6489[2], i6489[3], 0, i6488, '_canvas')
  request.r(i6489[4], i6489[5], 0, i6488, '_jumpSmoke')
  request.r(i6489[6], i6489[7], 0, i6488, '_light')
  request.r(i6489[8], i6489[9], 0, i6488, '_smoke')
  request.r(i6489[10], i6489[11], 0, i6488, '_enemyPool')
  request.r(i6489[12], i6489[13], 0, i6488, '_specialEnemy')
  return i6488
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i6490 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i6491 = data
  request.r(i6491[0], i6491[1], 0, i6490, 'm_LookAt')
  request.r(i6491[2], i6491[3], 0, i6490, 'm_Follow')
  i6490.m_Lens = request.d('Cinemachine.LensSettings', i6491[4], i6490.m_Lens)
  i6490.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i6491[5], i6490.m_Transitions)
  var i6493 = i6491[6]
  var i6492 = []
  for(var i = 0; i < i6493.length; i += 1) {
    i6492.push( i6493[i + 0] );
  }
  i6490.m_ExcludedPropertiesInInspector = i6492
  var i6495 = i6491[7]
  var i6494 = []
  for(var i = 0; i < i6495.length; i += 1) {
    i6494.push( i6495[i + 0] );
  }
  i6490.m_LockStageInInspector = i6494
  i6490.m_Priority = i6491[8]
  i6490.m_StandbyUpdate = i6491[9]
  i6490.m_LegacyBlendHint = i6491[10]
  request.r(i6491[11], i6491[12], 0, i6490, 'm_ComponentOwner')
  i6490.m_StreamingVersion = i6491[13]
  return i6490
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i6496 = root || request.c( 'Cinemachine.LensSettings' )
  var i6497 = data
  i6496.FieldOfView = i6497[0]
  i6496.OrthographicSize = i6497[1]
  i6496.NearClipPlane = i6497[2]
  i6496.FarClipPlane = i6497[3]
  i6496.Dutch = i6497[4]
  i6496.LensShift = new pc.Vec2( i6497[5], i6497[6] )
  return i6496
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i6498 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i6499 = data
  i6498.m_BlendHint = i6499[0]
  i6498.m_InheritPosition = !!i6499[1]
  i6498.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i6499[2], i6498.m_OnCameraLive)
  return i6498
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i6504 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i6505 = data
  return i6504
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i6506 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i6507 = data
  i6506.m_TrackedObjectOffset = new pc.Vec3( i6507[0], i6507[1], i6507[2] )
  i6506.m_LookaheadTime = i6507[3]
  i6506.m_LookaheadSmoothing = i6507[4]
  i6506.m_LookaheadIgnoreY = !!i6507[5]
  i6506.m_HorizontalDamping = i6507[6]
  i6506.m_VerticalDamping = i6507[7]
  i6506.m_ScreenX = i6507[8]
  i6506.m_ScreenY = i6507[9]
  i6506.m_DeadZoneWidth = i6507[10]
  i6506.m_DeadZoneHeight = i6507[11]
  i6506.m_SoftZoneWidth = i6507[12]
  i6506.m_SoftZoneHeight = i6507[13]
  i6506.m_BiasX = i6507[14]
  i6506.m_BiasY = i6507[15]
  i6506.m_CenterOnActivate = !!i6507[16]
  return i6506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i6508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i6509 = data
  i6508.enabled = !!i6509[0]
  request.r(i6509[1], i6509[2], 0, i6508, 'sharedMaterial')
  var i6511 = i6509[3]
  var i6510 = []
  for(var i = 0; i < i6511.length; i += 2) {
  request.r(i6511[i + 0], i6511[i + 1], 2, i6510, '')
  }
  i6508.sharedMaterials = i6510
  i6508.receiveShadows = !!i6509[4]
  i6508.shadowCastingMode = i6509[5]
  i6508.sortingLayerID = i6509[6]
  i6508.sortingOrder = i6509[7]
  i6508.lightmapIndex = i6509[8]
  i6508.lightmapSceneIndex = i6509[9]
  i6508.lightmapScaleOffset = new pc.Vec4( i6509[10], i6509[11], i6509[12], i6509[13] )
  i6508.lightProbeUsage = i6509[14]
  i6508.reflectionProbeUsage = i6509[15]
  request.r(i6509[16], i6509[17], 0, i6508, 'sharedMesh')
  var i6513 = i6509[18]
  var i6512 = []
  for(var i = 0; i < i6513.length; i += 2) {
  request.r(i6513[i + 0], i6513[i + 1], 2, i6512, '')
  }
  i6508.bones = i6512
  i6508.updateWhenOffscreen = !!i6509[19]
  i6508.localBounds = i6509[20]
  request.r(i6509[21], i6509[22], 0, i6508, 'rootBone')
  var i6515 = i6509[23]
  var i6514 = []
  for(var i = 0; i < i6515.length; i += 1) {
    i6514.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i6515[i + 0]) );
  }
  i6508.blendShapesWeights = i6514
  return i6508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i6518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i6519 = data
  i6518.weight = i6519[0]
  return i6518
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i6520 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i6521 = data
  i6520.m_BindingMode = i6521[0]
  i6520.m_FollowOffset = new pc.Vec3( i6521[1], i6521[2], i6521[3] )
  i6520.m_XDamping = i6521[4]
  i6520.m_YDamping = i6521[5]
  i6520.m_ZDamping = i6521[6]
  i6520.m_AngularDampingMode = i6521[7]
  i6520.m_PitchDamping = i6521[8]
  i6520.m_YawDamping = i6521[9]
  i6520.m_RollDamping = i6521[10]
  i6520.m_AngularDamping = i6521[11]
  return i6520
}

Deserializers["StartCamera"] = function (request, data, root) {
  var i6522 = root || request.c( 'StartCamera' )
  var i6523 = data
  request.r(i6523[0], i6523[1], 0, i6522, '_startCamera')
  request.r(i6523[2], i6523[3], 0, i6522, '_path')
  request.r(i6523[4], i6523[5], 0, i6522, '_player')
  request.r(i6523[6], i6523[7], 0, i6522, '_canvas')
  return i6522
}

Deserializers["ResolutionHandler"] = function (request, data, root) {
  var i6524 = root || request.c( 'ResolutionHandler' )
  var i6525 = data
  request.r(i6525[0], i6525[1], 0, i6524, '_secondCamera')
  request.r(i6525[2], i6525[3], 0, i6524, '_fourthCamera')
  request.r(i6525[4], i6525[5], 0, i6524, '_fifthCamera')
  return i6524
}

Deserializers["CameraHandler"] = function (request, data, root) {
  var i6526 = root || request.c( 'CameraHandler' )
  var i6527 = data
  request.r(i6527[0], i6527[1], 0, i6526, '_jumpHandler')
  request.r(i6527[2], i6527[3], 0, i6526, '_firstCamera')
  request.r(i6527[4], i6527[5], 0, i6526, '_secondCamera')
  request.r(i6527[6], i6527[7], 0, i6526, '_thirdCamera')
  request.r(i6527[8], i6527[9], 0, i6526, '_fourthCamera')
  request.r(i6527[10], i6527[11], 0, i6526, '_fifthCamera')
  return i6526
}

Deserializers["Cinemachine.CinemachineTrackedDolly"] = function (request, data, root) {
  var i6528 = root || request.c( 'Cinemachine.CinemachineTrackedDolly' )
  var i6529 = data
  request.r(i6529[0], i6529[1], 0, i6528, 'm_Path')
  i6528.m_PathPosition = i6529[2]
  i6528.m_PositionUnits = i6529[3]
  i6528.m_PathOffset = new pc.Vec3( i6529[4], i6529[5], i6529[6] )
  i6528.m_XDamping = i6529[7]
  i6528.m_YDamping = i6529[8]
  i6528.m_ZDamping = i6529[9]
  i6528.m_CameraUp = i6529[10]
  i6528.m_PitchDamping = i6529[11]
  i6528.m_YawDamping = i6529[12]
  i6528.m_RollDamping = i6529[13]
  i6528.m_AutoDolly = request.d('Cinemachine.CinemachineTrackedDolly+AutoDolly', i6529[14], i6528.m_AutoDolly)
  return i6528
}

Deserializers["Cinemachine.CinemachineTrackedDolly+AutoDolly"] = function (request, data, root) {
  var i6530 = root || request.c( 'Cinemachine.CinemachineTrackedDolly+AutoDolly' )
  var i6531 = data
  i6530.m_Enabled = !!i6531[0]
  i6530.m_PositionOffset = i6531[1]
  i6530.m_SearchRadius = i6531[2]
  i6530.m_SearchResolution = i6531[3]
  return i6530
}

Deserializers["Cinemachine.CinemachineSmoothPath"] = function (request, data, root) {
  var i6532 = root || request.c( 'Cinemachine.CinemachineSmoothPath' )
  var i6533 = data
  i6532.m_Looped = !!i6533[0]
  var i6535 = i6533[1]
  var i6534 = []
  for(var i = 0; i < i6535.length; i += 1) {
    i6534.push( request.d('Cinemachine.CinemachineSmoothPath+Waypoint', i6535[i + 0]) );
  }
  i6532.m_Waypoints = i6534
  i6532.m_Resolution = i6533[2]
  i6532.m_Appearance = request.d('Cinemachine.CinemachinePathBase+Appearance', i6533[3], i6532.m_Appearance)
  return i6532
}

Deserializers["Cinemachine.CinemachineSmoothPath+Waypoint"] = function (request, data, root) {
  var i6538 = root || request.c( 'Cinemachine.CinemachineSmoothPath+Waypoint' )
  var i6539 = data
  i6538.position = new pc.Vec3( i6539[0], i6539[1], i6539[2] )
  i6538.roll = i6539[3]
  return i6538
}

Deserializers["Cinemachine.CinemachinePathBase+Appearance"] = function (request, data, root) {
  var i6540 = root || request.c( 'Cinemachine.CinemachinePathBase+Appearance' )
  var i6541 = data
  i6540.pathColor = new pc.Color(i6541[0], i6541[1], i6541[2], i6541[3])
  i6540.inactivePathColor = new pc.Color(i6541[4], i6541[5], i6541[6], i6541[7])
  i6540.width = i6541[8]
  return i6540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6543 = data
  i6542.pivot = new pc.Vec2( i6543[0], i6543[1] )
  i6542.anchorMin = new pc.Vec2( i6543[2], i6543[3] )
  i6542.anchorMax = new pc.Vec2( i6543[4], i6543[5] )
  i6542.sizeDelta = new pc.Vec2( i6543[6], i6543[7] )
  i6542.anchoredPosition3D = new pc.Vec3( i6543[8], i6543[9], i6543[10] )
  i6542.rotation = new pc.Quat(i6543[11], i6543[12], i6543[13], i6543[14])
  i6542.scale = new pc.Vec3( i6543[15], i6543[16], i6543[17] )
  return i6542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6545 = data
  i6544.enabled = !!i6545[0]
  i6544.planeDistance = i6545[1]
  i6544.referencePixelsPerUnit = i6545[2]
  i6544.isFallbackOverlay = !!i6545[3]
  i6544.renderMode = i6545[4]
  i6544.renderOrder = i6545[5]
  i6544.sortingLayerName = i6545[6]
  i6544.sortingOrder = i6545[7]
  i6544.scaleFactor = i6545[8]
  request.r(i6545[9], i6545[10], 0, i6544, 'worldCamera')
  i6544.overrideSorting = !!i6545[11]
  i6544.pixelPerfect = !!i6545[12]
  i6544.targetDisplay = i6545[13]
  i6544.overridePixelPerfect = !!i6545[14]
  return i6544
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6546 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6547 = data
  i6546.m_UiScaleMode = i6547[0]
  i6546.m_ReferencePixelsPerUnit = i6547[1]
  i6546.m_ScaleFactor = i6547[2]
  i6546.m_ReferenceResolution = new pc.Vec2( i6547[3], i6547[4] )
  i6546.m_ScreenMatchMode = i6547[5]
  i6546.m_MatchWidthOrHeight = i6547[6]
  i6546.m_PhysicalUnit = i6547[7]
  i6546.m_FallbackScreenDPI = i6547[8]
  i6546.m_DefaultSpriteDPI = i6547[9]
  i6546.m_DynamicPixelsPerUnit = i6547[10]
  i6546.m_PresetInfoIsWorld = !!i6547[11]
  return i6546
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6548 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6549 = data
  i6548.m_IgnoreReversedGraphics = !!i6549[0]
  i6548.m_BlockingObjects = i6549[1]
  i6548.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6549[2] )
  return i6548
}

Deserializers["UIHandler"] = function (request, data, root) {
  var i6550 = root || request.c( 'UIHandler' )
  var i6551 = data
  request.r(i6551[0], i6551[1], 0, i6550, '_jumpHandler')
  request.r(i6551[2], i6551[3], 0, i6550, '_powerButton')
  request.r(i6551[4], i6551[5], 0, i6550, '_cTAButton')
  request.r(i6551[6], i6551[7], 0, i6550, '_fade')
  request.r(i6551[8], i6551[9], 0, i6550, '_finalPanel')
  return i6550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6553 = data
  i6552.cullTransparentMesh = !!i6553[0]
  return i6552
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6554 = root || request.c( 'UnityEngine.UI.Image' )
  var i6555 = data
  request.r(i6555[0], i6555[1], 0, i6554, 'm_Sprite')
  i6554.m_Type = i6555[2]
  i6554.m_PreserveAspect = !!i6555[3]
  i6554.m_FillCenter = !!i6555[4]
  i6554.m_FillMethod = i6555[5]
  i6554.m_FillAmount = i6555[6]
  i6554.m_FillClockwise = !!i6555[7]
  i6554.m_FillOrigin = i6555[8]
  i6554.m_UseSpriteMesh = !!i6555[9]
  i6554.m_PixelsPerUnitMultiplier = i6555[10]
  request.r(i6555[11], i6555[12], 0, i6554, 'm_Material')
  i6554.m_Maskable = !!i6555[13]
  i6554.m_Color = new pc.Color(i6555[14], i6555[15], i6555[16], i6555[17])
  i6554.m_RaycastTarget = !!i6555[18]
  i6554.m_RaycastPadding = new pc.Vec4( i6555[19], i6555[20], i6555[21], i6555[22] )
  return i6554
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6556 = root || request.c( 'UnityEngine.UI.Button' )
  var i6557 = data
  i6556.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6557[0], i6556.m_OnClick)
  i6556.m_Navigation = request.d('UnityEngine.UI.Navigation', i6557[1], i6556.m_Navigation)
  i6556.m_Transition = i6557[2]
  i6556.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6557[3], i6556.m_Colors)
  i6556.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6557[4], i6556.m_SpriteState)
  i6556.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6557[5], i6556.m_AnimationTriggers)
  i6556.m_Interactable = !!i6557[6]
  request.r(i6557[7], i6557[8], 0, i6556, 'm_TargetGraphic')
  return i6556
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6558 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6559 = data
  i6558.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6559[0], i6558.m_PersistentCalls)
  return i6558
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6560 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6561 = data
  i6560.m_Mode = i6561[0]
  i6560.m_WrapAround = !!i6561[1]
  request.r(i6561[2], i6561[3], 0, i6560, 'm_SelectOnUp')
  request.r(i6561[4], i6561[5], 0, i6560, 'm_SelectOnDown')
  request.r(i6561[6], i6561[7], 0, i6560, 'm_SelectOnLeft')
  request.r(i6561[8], i6561[9], 0, i6560, 'm_SelectOnRight')
  return i6560
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6562 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6563 = data
  i6562.m_NormalColor = new pc.Color(i6563[0], i6563[1], i6563[2], i6563[3])
  i6562.m_HighlightedColor = new pc.Color(i6563[4], i6563[5], i6563[6], i6563[7])
  i6562.m_PressedColor = new pc.Color(i6563[8], i6563[9], i6563[10], i6563[11])
  i6562.m_SelectedColor = new pc.Color(i6563[12], i6563[13], i6563[14], i6563[15])
  i6562.m_DisabledColor = new pc.Color(i6563[16], i6563[17], i6563[18], i6563[19])
  i6562.m_ColorMultiplier = i6563[20]
  i6562.m_FadeDuration = i6563[21]
  return i6562
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6564 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6565 = data
  request.r(i6565[0], i6565[1], 0, i6564, 'm_HighlightedSprite')
  request.r(i6565[2], i6565[3], 0, i6564, 'm_PressedSprite')
  request.r(i6565[4], i6565[5], 0, i6564, 'm_SelectedSprite')
  request.r(i6565[6], i6565[7], 0, i6564, 'm_DisabledSprite')
  return i6564
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6566 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6567 = data
  i6566.m_NormalTrigger = i6567[0]
  i6566.m_HighlightedTrigger = i6567[1]
  i6566.m_PressedTrigger = i6567[2]
  i6566.m_SelectedTrigger = i6567[3]
  i6566.m_DisabledTrigger = i6567[4]
  return i6566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i6568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i6569 = data
  i6568.m_Alpha = i6569[0]
  i6568.m_Interactable = !!i6569[1]
  i6568.m_BlocksRaycasts = !!i6569[2]
  i6568.m_IgnoreParentGroups = !!i6569[3]
  i6568.enabled = !!i6569[4]
  return i6568
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i6570 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i6571 = data
  i6570.m_hasFontAssetChanged = !!i6571[0]
  request.r(i6571[1], i6571[2], 0, i6570, 'm_baseMaterial')
  i6570.m_maskOffset = new pc.Vec4( i6571[3], i6571[4], i6571[5], i6571[6] )
  i6570.m_text = i6571[7]
  i6570.m_isRightToLeft = !!i6571[8]
  request.r(i6571[9], i6571[10], 0, i6570, 'm_fontAsset')
  request.r(i6571[11], i6571[12], 0, i6570, 'm_sharedMaterial')
  var i6573 = i6571[13]
  var i6572 = []
  for(var i = 0; i < i6573.length; i += 2) {
  request.r(i6573[i + 0], i6573[i + 1], 2, i6572, '')
  }
  i6570.m_fontSharedMaterials = i6572
  request.r(i6571[14], i6571[15], 0, i6570, 'm_fontMaterial')
  var i6575 = i6571[16]
  var i6574 = []
  for(var i = 0; i < i6575.length; i += 2) {
  request.r(i6575[i + 0], i6575[i + 1], 2, i6574, '')
  }
  i6570.m_fontMaterials = i6574
  i6570.m_fontColor32 = UnityEngine.Color32.ConstructColor(i6571[17], i6571[18], i6571[19], i6571[20])
  i6570.m_fontColor = new pc.Color(i6571[21], i6571[22], i6571[23], i6571[24])
  i6570.m_enableVertexGradient = !!i6571[25]
  i6570.m_colorMode = i6571[26]
  i6570.m_fontColorGradient = request.d('TMPro.VertexGradient', i6571[27], i6570.m_fontColorGradient)
  request.r(i6571[28], i6571[29], 0, i6570, 'm_fontColorGradientPreset')
  request.r(i6571[30], i6571[31], 0, i6570, 'm_spriteAsset')
  i6570.m_tintAllSprites = !!i6571[32]
  request.r(i6571[33], i6571[34], 0, i6570, 'm_StyleSheet')
  i6570.m_TextStyleHashCode = i6571[35]
  i6570.m_overrideHtmlColors = !!i6571[36]
  i6570.m_faceColor = UnityEngine.Color32.ConstructColor(i6571[37], i6571[38], i6571[39], i6571[40])
  i6570.m_fontSize = i6571[41]
  i6570.m_fontSizeBase = i6571[42]
  i6570.m_fontWeight = i6571[43]
  i6570.m_enableAutoSizing = !!i6571[44]
  i6570.m_fontSizeMin = i6571[45]
  i6570.m_fontSizeMax = i6571[46]
  i6570.m_fontStyle = i6571[47]
  i6570.m_HorizontalAlignment = i6571[48]
  i6570.m_VerticalAlignment = i6571[49]
  i6570.m_textAlignment = i6571[50]
  i6570.m_characterSpacing = i6571[51]
  i6570.m_wordSpacing = i6571[52]
  i6570.m_lineSpacing = i6571[53]
  i6570.m_lineSpacingMax = i6571[54]
  i6570.m_paragraphSpacing = i6571[55]
  i6570.m_charWidthMaxAdj = i6571[56]
  i6570.m_enableWordWrapping = !!i6571[57]
  i6570.m_wordWrappingRatios = i6571[58]
  i6570.m_overflowMode = i6571[59]
  request.r(i6571[60], i6571[61], 0, i6570, 'm_linkedTextComponent')
  request.r(i6571[62], i6571[63], 0, i6570, 'parentLinkedComponent')
  i6570.m_enableKerning = !!i6571[64]
  i6570.m_enableExtraPadding = !!i6571[65]
  i6570.checkPaddingRequired = !!i6571[66]
  i6570.m_isRichText = !!i6571[67]
  i6570.m_parseCtrlCharacters = !!i6571[68]
  i6570.m_isOrthographic = !!i6571[69]
  i6570.m_isCullingEnabled = !!i6571[70]
  i6570.m_horizontalMapping = i6571[71]
  i6570.m_verticalMapping = i6571[72]
  i6570.m_uvLineOffset = i6571[73]
  i6570.m_geometrySortingOrder = i6571[74]
  i6570.m_IsTextObjectScaleStatic = !!i6571[75]
  i6570.m_VertexBufferAutoSizeReduction = !!i6571[76]
  i6570.m_useMaxVisibleDescender = !!i6571[77]
  i6570.m_pageToDisplay = i6571[78]
  i6570.m_margin = new pc.Vec4( i6571[79], i6571[80], i6571[81], i6571[82] )
  i6570.m_isUsingLegacyAnimationComponent = !!i6571[83]
  i6570.m_isVolumetricText = !!i6571[84]
  request.r(i6571[85], i6571[86], 0, i6570, 'm_Material')
  i6570.m_Maskable = !!i6571[87]
  i6570.m_Color = new pc.Color(i6571[88], i6571[89], i6571[90], i6571[91])
  i6570.m_RaycastTarget = !!i6571[92]
  i6570.m_RaycastPadding = new pc.Vec4( i6571[93], i6571[94], i6571[95], i6571[96] )
  return i6570
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i6576 = root || request.c( 'TMPro.VertexGradient' )
  var i6577 = data
  i6576.topLeft = new pc.Color(i6577[0], i6577[1], i6577[2], i6577[3])
  i6576.topRight = new pc.Color(i6577[4], i6577[5], i6577[6], i6577[7])
  i6576.bottomLeft = new pc.Color(i6577[8], i6577[9], i6577[10], i6577[11])
  i6576.bottomRight = new pc.Color(i6577[12], i6577[13], i6577[14], i6577[15])
  return i6576
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i6578 = root || request.c( 'UnityEngine.UI.Mask' )
  var i6579 = data
  i6578.m_ShowMaskGraphic = !!i6579[0]
  return i6578
}

Deserializers["EnemyPool"] = function (request, data, root) {
  var i6580 = root || request.c( 'EnemyPool' )
  var i6581 = data
  var i6583 = i6581[0]
  var i6582 = new (System.Collections.Generic.List$1(Bridge.ns('Enemy')))
  for(var i = 0; i < i6583.length; i += 2) {
  request.r(i6583[i + 0], i6583[i + 1], 1, i6582, '')
  }
  i6580._enemies = i6582
  return i6580
}

Deserializers["Stalker"] = function (request, data, root) {
  var i6586 = root || request.c( 'Stalker' )
  var i6587 = data
  request.r(i6587[0], i6587[1], 0, i6586, '_target')
  return i6586
}

Deserializers["Enemy"] = function (request, data, root) {
  var i6588 = root || request.c( 'Enemy' )
  var i6589 = data
  return i6588
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6590 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6591 = data
  request.r(i6591[0], i6591[1], 0, i6590, 'm_FirstSelected')
  i6590.m_sendNavigationEvents = !!i6591[2]
  i6590.m_DragThreshold = i6591[3]
  return i6590
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6592 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6593 = data
  i6592.m_HorizontalAxis = i6593[0]
  i6592.m_VerticalAxis = i6593[1]
  i6592.m_SubmitButton = i6593[2]
  i6592.m_CancelButton = i6593[3]
  i6592.m_InputActionsPerSecond = i6593[4]
  i6592.m_RepeatDelay = i6593[5]
  i6592.m_ForceModuleActive = !!i6593[6]
  return i6592
}

Deserializers["ChooseHandler"] = function (request, data, root) {
  var i6594 = root || request.c( 'ChooseHandler' )
  var i6595 = data
  i6594._currentCharacter = i6595[0]
  request.r(i6595[1], i6595[2], 0, i6594, '_soundHandler')
  request.r(i6595[3], i6595[4], 0, i6594, '_scene')
  request.r(i6595[5], i6595[6], 0, i6594, '_sceneBackground')
  request.r(i6595[7], i6595[8], 0, i6594, '_chooseButton')
  var i6597 = i6595[9]
  var i6596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i6597.length; i += 2) {
  request.r(i6597[i + 0], i6597[i + 1], 1, i6596, '')
  }
  i6594._characters = i6596
  request.r(i6595[10], i6595[11], 0, i6594, '_frame')
  return i6594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6601 = data
  i6600.ambientIntensity = i6601[0]
  i6600.reflectionIntensity = i6601[1]
  i6600.ambientMode = i6601[2]
  i6600.ambientLight = new pc.Color(i6601[3], i6601[4], i6601[5], i6601[6])
  i6600.ambientSkyColor = new pc.Color(i6601[7], i6601[8], i6601[9], i6601[10])
  i6600.ambientGroundColor = new pc.Color(i6601[11], i6601[12], i6601[13], i6601[14])
  i6600.ambientEquatorColor = new pc.Color(i6601[15], i6601[16], i6601[17], i6601[18])
  i6600.fogColor = new pc.Color(i6601[19], i6601[20], i6601[21], i6601[22])
  i6600.fogEndDistance = i6601[23]
  i6600.fogStartDistance = i6601[24]
  i6600.fogDensity = i6601[25]
  i6600.fog = !!i6601[26]
  request.r(i6601[27], i6601[28], 0, i6600, 'skybox')
  i6600.fogMode = i6601[29]
  var i6603 = i6601[30]
  var i6602 = []
  for(var i = 0; i < i6603.length; i += 1) {
    i6602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6603[i + 0]) );
  }
  i6600.lightmaps = i6602
  i6600.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6601[31], i6600.lightProbes)
  i6600.lightmapsMode = i6601[32]
  i6600.environmentLightingMode = i6601[33]
  i6600.ambientProbe = new pc.SphericalHarmonicsL2(i6601[34])
  i6600.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6601[35])
  i6600.useReferenceAmbientProbe = !!i6601[36]
  request.r(i6601[37], i6601[38], 0, i6600, 'customReflection')
  request.r(i6601[39], i6601[40], 0, i6600, 'defaultReflection')
  i6600.defaultReflectionMode = i6601[41]
  i6600.defaultReflectionResolution = i6601[42]
  i6600.sunLightObjectId = i6601[43]
  i6600.pixelLightCount = i6601[44]
  i6600.defaultReflectionHDR = !!i6601[45]
  i6600.hasLightDataAsset = !!i6601[46]
  i6600.hasManualGenerate = !!i6601[47]
  return i6600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6607 = data
  request.r(i6607[0], i6607[1], 0, i6606, 'lightmapColor')
  request.r(i6607[2], i6607[3], 0, i6606, 'lightmapDirection')
  return i6606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6608 = root || new UnityEngine.LightProbes()
  var i6609 = data
  return i6608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6617 = data
  var i6619 = i6617[0]
  var i6618 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i6619.length; i += 1) {
    i6618.add(i6619[i + 0]);
  }
  i6616.invalidShaderVariants = i6618
  i6616.name = i6617[1]
  i6616.guid = i6617[2]
  var i6621 = i6617[3]
  var i6620 = []
  for(var i = 0; i < i6621.length; i += 1) {
    i6620.push( i6621[i + 0] );
  }
  i6616.shaderDefinedKeywords = i6620
  var i6623 = i6617[4]
  var i6622 = []
  for(var i = 0; i < i6623.length; i += 1) {
    i6622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6623[i + 0]) );
  }
  i6616.passes = i6622
  var i6625 = i6617[5]
  var i6624 = []
  for(var i = 0; i < i6625.length; i += 1) {
    i6624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6625[i + 0]) );
  }
  i6616.usePasses = i6624
  var i6627 = i6617[6]
  var i6626 = []
  for(var i = 0; i < i6627.length; i += 1) {
    i6626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6627[i + 0]) );
  }
  i6616.defaultParameterValues = i6626
  request.r(i6617[7], i6617[8], 0, i6616, 'unityFallbackShader')
  i6616.readDepth = !!i6617[9]
  i6616.isCreatedByShaderGraph = !!i6617[10]
  return i6616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6632 = root || new pc.UnityShaderPass()
  var i6633 = data
  i6632.id = i6633[0]
  i6632.subShaderIndex = i6633[1]
  i6632.name = i6633[2]
  i6632.passType = i6633[3]
  i6632.usePass = !!i6633[4]
  i6632.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6633[5], i6632.zTest)
  i6632.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6633[6], i6632.zWrite)
  i6632.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6633[7], i6632.culling)
  i6632.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6633[8], i6632.blending)
  i6632.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6633[9], i6632.alphaBlending)
  i6632.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6633[10], i6632.colorWriteMask)
  i6632.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6633[11], i6632.offsetUnits)
  i6632.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6633[12], i6632.offsetFactor)
  i6632.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6633[13], i6632.stencilRef)
  i6632.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6633[14], i6632.stencilReadMask)
  i6632.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6633[15], i6632.stencilWriteMask)
  i6632.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6633[16], i6632.stencilOp)
  i6632.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6633[17], i6632.stencilOpFront)
  i6632.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6633[18], i6632.stencilOpBack)
  var i6635 = i6633[19]
  var i6634 = []
  for(var i = 0; i < i6635.length; i += 1) {
    i6634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6635[i + 0]) );
  }
  i6632.tags = i6634
  var i6637 = i6633[20]
  var i6636 = []
  for(var i = 0; i < i6637.length; i += 1) {
    i6636.push( i6637[i + 0] );
  }
  i6632.passDefinedKeywords = i6636
  var i6639 = i6633[21]
  var i6638 = []
  for(var i = 0; i < i6639.length; i += 1) {
    i6638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6639[i + 0]) );
  }
  i6632.variants = i6638
  var i6641 = i6633[22]
  var i6640 = []
  for(var i = 0; i < i6641.length; i += 1) {
    i6640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6641[i + 0]) );
  }
  i6632.excludedVariants = i6640
  i6632.hasDepthReader = !!i6633[23]
  return i6632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6643 = data
  i6642.val = i6643[0]
  i6642.name = i6643[1]
  return i6642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6645 = data
  i6644.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6645[0], i6644.src)
  i6644.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6645[1], i6644.dst)
  i6644.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6645[2], i6644.op)
  return i6644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6647 = data
  i6646.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6647[0], i6646.pass)
  i6646.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6647[1], i6646.fail)
  i6646.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6647[2], i6646.zFail)
  i6646.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6647[3], i6646.comp)
  return i6646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6651 = data
  i6650.name = i6651[0]
  i6650.value = i6651[1]
  return i6650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6655 = data
  i6654.passId = i6655[0]
  i6654.subShaderIndex = i6655[1]
  var i6657 = i6655[2]
  var i6656 = []
  for(var i = 0; i < i6657.length; i += 1) {
    i6656.push( i6657[i + 0] );
  }
  i6654.keywords = i6656
  i6654.vertexProgram = i6655[3]
  i6654.fragmentProgram = i6655[4]
  i6654.readDepth = !!i6655[5]
  return i6654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6661 = data
  request.r(i6661[0], i6661[1], 0, i6660, 'shader')
  i6660.pass = i6661[2]
  return i6660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6665 = data
  i6664.name = i6665[0]
  i6664.type = i6665[1]
  i6664.value = new pc.Vec4( i6665[2], i6665[3], i6665[4], i6665[5] )
  i6664.textureValue = i6665[6]
  return i6664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6667 = data
  i6666.name = i6667[0]
  request.r(i6667[1], i6667[2], 0, i6666, 'texture')
  i6666.aabb = i6667[3]
  i6666.vertices = i6667[4]
  i6666.triangles = i6667[5]
  i6666.textureRect = UnityEngine.Rect.MinMaxRect(i6667[6], i6667[7], i6667[8], i6667[9])
  i6666.packedRect = UnityEngine.Rect.MinMaxRect(i6667[10], i6667[11], i6667[12], i6667[13])
  i6666.border = new pc.Vec4( i6667[14], i6667[15], i6667[16], i6667[17] )
  i6666.transparency = i6667[18]
  i6666.bounds = i6667[19]
  i6666.pixelsPerUnit = i6667[20]
  i6666.textureWidth = i6667[21]
  i6666.textureHeight = i6667[22]
  i6666.nativeSize = new pc.Vec2( i6667[23], i6667[24] )
  i6666.pivot = new pc.Vec2( i6667[25], i6667[26] )
  i6666.textureRectOffset = new pc.Vec2( i6667[27], i6667[28] )
  return i6666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6669 = data
  i6668.name = i6669[0]
  return i6668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6671 = data
  i6670.name = i6671[0]
  i6670.wrapMode = i6671[1]
  i6670.isLooping = !!i6671[2]
  i6670.length = i6671[3]
  var i6673 = i6671[4]
  var i6672 = []
  for(var i = 0; i < i6673.length; i += 1) {
    i6672.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6673[i + 0]) );
  }
  i6670.curves = i6672
  var i6675 = i6671[5]
  var i6674 = []
  for(var i = 0; i < i6675.length; i += 1) {
    i6674.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6675[i + 0]) );
  }
  i6670.events = i6674
  i6670.halfPrecision = !!i6671[6]
  return i6670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6679 = data
  i6678.path = i6679[0]
  i6678.componentType = i6679[1]
  i6678.property = i6679[2]
  i6678.keys = i6679[3]
  var i6681 = i6679[4]
  var i6680 = []
  for(var i = 0; i < i6681.length; i += 1) {
    i6680.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6681[i + 0]) );
  }
  i6678.objectReferenceKeys = i6680
  return i6678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6685 = data
  i6684.time = i6685[0]
  request.r(i6685[1], i6685[2], 0, i6684, 'value')
  return i6684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6689 = data
  i6688.functionName = i6689[0]
  i6688.floatParameter = i6689[1]
  i6688.intParameter = i6689[2]
  i6688.stringParameter = i6689[3]
  request.r(i6689[4], i6689[5], 0, i6688, 'objectReferenceParameter')
  i6688.time = i6689[6]
  return i6688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6691 = data
  i6690.name = i6691[0]
  var i6693 = i6691[1]
  var i6692 = []
  for(var i = 0; i < i6693.length; i += 1) {
    i6692.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6693[i + 0]) );
  }
  i6690.states = i6692
  var i6695 = i6691[2]
  var i6694 = []
  for(var i = 0; i < i6695.length; i += 1) {
    i6694.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6695[i + 0]) );
  }
  i6690.layers = i6694
  var i6697 = i6691[3]
  var i6696 = []
  for(var i = 0; i < i6697.length; i += 1) {
    i6696.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6697[i + 0]) );
  }
  i6690.parameters = i6696
  var i6699 = i6691[4]
  var i6698 = []
  for(var i = 0; i < i6699.length; i += 1) {
    i6698.push( i6699[i + 0] );
  }
  i6690.animationClips = i6698
  i6690.HasSubStateMachines = !!i6691[5]
  return i6690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6703 = data
  i6702.cycleOffset = i6703[0]
  i6702.cycleOffsetParameter = i6703[1]
  i6702.cycleOffsetParameterActive = !!i6703[2]
  i6702.mirror = !!i6703[3]
  i6702.mirrorParameter = i6703[4]
  i6702.mirrorParameterActive = !!i6703[5]
  i6702.motionId = i6703[6]
  i6702.nameHash = i6703[7]
  i6702.fullPathHash = i6703[8]
  i6702.speed = i6703[9]
  i6702.speedParameter = i6703[10]
  i6702.speedParameterActive = !!i6703[11]
  i6702.tag = i6703[12]
  i6702.name = i6703[13]
  i6702.writeDefaultValues = !!i6703[14]
  var i6705 = i6703[15]
  var i6704 = []
  for(var i = 0; i < i6705.length; i += 1) {
    i6704.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6705[i + 0]) );
  }
  i6702.transitions = i6704
  var i6707 = i6703[16]
  var i6706 = []
  for(var i = 0; i < i6707.length; i += 2) {
  request.r(i6707[i + 0], i6707[i + 1], 2, i6706, '')
  }
  i6702.behaviours = i6706
  return i6702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6711 = data
  i6710.fullPath = i6711[0]
  i6710.canTransitionToSelf = !!i6711[1]
  i6710.duration = i6711[2]
  i6710.exitTime = i6711[3]
  i6710.hasExitTime = !!i6711[4]
  i6710.hasFixedDuration = !!i6711[5]
  i6710.interruptionSource = i6711[6]
  i6710.offset = i6711[7]
  i6710.orderedInterruption = !!i6711[8]
  i6710.destinationStateNameHash = i6711[9]
  i6710.destinationStateMachineId = i6711[10]
  i6710.isExit = !!i6711[11]
  i6710.mute = !!i6711[12]
  i6710.solo = !!i6711[13]
  var i6713 = i6711[14]
  var i6712 = []
  for(var i = 0; i < i6713.length; i += 1) {
    i6712.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6713[i + 0]) );
  }
  i6710.conditions = i6712
  return i6710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6719 = data
  i6718.mode = i6719[0]
  i6718.parameter = i6719[1]
  i6718.threshold = i6719[2]
  return i6718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6723 = data
  i6722.blendingMode = i6723[0]
  i6722.defaultWeight = i6723[1]
  i6722.name = i6723[2]
  i6722.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6723[3], i6722.stateMachine)
  return i6722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6725 = data
  i6724.id = i6725[0]
  i6724.defaultStateNameHash = i6725[1]
  var i6727 = i6725[2]
  var i6726 = []
  for(var i = 0; i < i6727.length; i += 1) {
    i6726.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6727[i + 0]) );
  }
  i6724.entryTransitions = i6726
  var i6729 = i6725[3]
  var i6728 = []
  for(var i = 0; i < i6729.length; i += 1) {
    i6728.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6729[i + 0]) );
  }
  i6724.anyStateTransitions = i6728
  return i6724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6733 = data
  i6732.destinationStateNameHash = i6733[0]
  i6732.destinationStateMachineId = i6733[1]
  i6732.isExit = !!i6733[2]
  i6732.mute = !!i6733[3]
  i6732.solo = !!i6733[4]
  var i6735 = i6733[5]
  var i6734 = []
  for(var i = 0; i < i6735.length; i += 1) {
    i6734.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6735[i + 0]) );
  }
  i6732.conditions = i6734
  return i6732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6739 = data
  i6738.defaultBool = !!i6739[0]
  i6738.defaultFloat = i6739[1]
  i6738.defaultInt = i6739[2]
  i6738.name = i6739[3]
  i6738.nameHash = i6739[4]
  i6738.type = i6739[5]
  return i6738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6741 = data
  i6740.name = i6741[0]
  i6740.bytes64 = i6741[1]
  i6740.data = i6741[2]
  return i6740
}

Deserializers["Cinemachine.CinemachineBlenderSettings"] = function (request, data, root) {
  var i6742 = root || request.c( 'Cinemachine.CinemachineBlenderSettings' )
  var i6743 = data
  var i6745 = i6743[0]
  var i6744 = []
  for(var i = 0; i < i6745.length; i += 1) {
    i6744.push( request.d('Cinemachine.CinemachineBlenderSettings+CustomBlend', i6745[i + 0]) );
  }
  i6742.m_CustomBlends = i6744
  return i6742
}

Deserializers["Cinemachine.CinemachineBlenderSettings+CustomBlend"] = function (request, data, root) {
  var i6748 = root || request.c( 'Cinemachine.CinemachineBlenderSettings+CustomBlend' )
  var i6749 = data
  i6748.m_From = i6749[0]
  i6748.m_To = i6749[1]
  i6748.m_Blend = request.d('Cinemachine.CinemachineBlendDefinition', i6749[2], i6748.m_Blend)
  return i6748
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i6750 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i6751 = data
  i6750.hashCode = i6751[0]
  request.r(i6751[1], i6751[2], 0, i6750, 'material')
  i6750.materialHashCode = i6751[3]
  request.r(i6751[4], i6751[5], 0, i6750, 'atlas')
  i6750.normalStyle = i6751[6]
  i6750.normalSpacingOffset = i6751[7]
  i6750.boldStyle = i6751[8]
  i6750.boldSpacing = i6751[9]
  i6750.italicStyle = i6751[10]
  i6750.tabSize = i6751[11]
  i6750.m_Version = i6751[12]
  i6750.m_SourceFontFileGUID = i6751[13]
  request.r(i6751[14], i6751[15], 0, i6750, 'm_SourceFontFile_EditorRef')
  request.r(i6751[16], i6751[17], 0, i6750, 'm_SourceFontFile')
  i6750.m_AtlasPopulationMode = i6751[18]
  i6750.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6751[19], i6750.m_FaceInfo)
  var i6753 = i6751[20]
  var i6752 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i6753.length; i += 1) {
    i6752.add(request.d('UnityEngine.TextCore.Glyph', i6753[i + 0]));
  }
  i6750.m_GlyphTable = i6752
  var i6755 = i6751[21]
  var i6754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i6755.length; i += 1) {
    i6754.add(request.d('TMPro.TMP_Character', i6755[i + 0]));
  }
  i6750.m_CharacterTable = i6754
  var i6757 = i6751[22]
  var i6756 = []
  for(var i = 0; i < i6757.length; i += 2) {
  request.r(i6757[i + 0], i6757[i + 1], 2, i6756, '')
  }
  i6750.m_AtlasTextures = i6756
  i6750.m_AtlasTextureIndex = i6751[23]
  i6750.m_IsMultiAtlasTexturesEnabled = !!i6751[24]
  i6750.m_ClearDynamicDataOnBuild = !!i6751[25]
  var i6759 = i6751[26]
  var i6758 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6759.length; i += 1) {
    i6758.add(request.d('UnityEngine.TextCore.GlyphRect', i6759[i + 0]));
  }
  i6750.m_UsedGlyphRects = i6758
  var i6761 = i6751[27]
  var i6760 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6761.length; i += 1) {
    i6760.add(request.d('UnityEngine.TextCore.GlyphRect', i6761[i + 0]));
  }
  i6750.m_FreeGlyphRects = i6760
  i6750.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i6751[28], i6750.m_fontInfo)
  i6750.m_AtlasWidth = i6751[29]
  i6750.m_AtlasHeight = i6751[30]
  i6750.m_AtlasPadding = i6751[31]
  i6750.m_AtlasRenderMode = i6751[32]
  var i6763 = i6751[33]
  var i6762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i6763.length; i += 1) {
    i6762.add(request.d('TMPro.TMP_Glyph', i6763[i + 0]));
  }
  i6750.m_glyphInfoList = i6762
  i6750.m_KerningTable = request.d('TMPro.KerningTable', i6751[34], i6750.m_KerningTable)
  i6750.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i6751[35], i6750.m_FontFeatureTable)
  var i6765 = i6751[36]
  var i6764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6765.length; i += 2) {
  request.r(i6765[i + 0], i6765[i + 1], 1, i6764, '')
  }
  i6750.fallbackFontAssets = i6764
  var i6767 = i6751[37]
  var i6766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6767.length; i += 2) {
  request.r(i6767[i + 0], i6767[i + 1], 1, i6766, '')
  }
  i6750.m_FallbackFontAssetTable = i6766
  i6750.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i6751[38], i6750.m_CreationSettings)
  var i6769 = i6751[39]
  var i6768 = []
  for(var i = 0; i < i6769.length; i += 1) {
    i6768.push( request.d('TMPro.TMP_FontWeightPair', i6769[i + 0]) );
  }
  i6750.m_FontWeightTable = i6768
  var i6771 = i6751[40]
  var i6770 = []
  for(var i = 0; i < i6771.length; i += 1) {
    i6770.push( request.d('TMPro.TMP_FontWeightPair', i6771[i + 0]) );
  }
  i6750.fontWeights = i6770
  return i6750
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i6772 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i6773 = data
  i6772.m_FaceIndex = i6773[0]
  i6772.m_FamilyName = i6773[1]
  i6772.m_StyleName = i6773[2]
  i6772.m_PointSize = i6773[3]
  i6772.m_Scale = i6773[4]
  i6772.m_LineHeight = i6773[5]
  i6772.m_AscentLine = i6773[6]
  i6772.m_CapLine = i6773[7]
  i6772.m_MeanLine = i6773[8]
  i6772.m_Baseline = i6773[9]
  i6772.m_DescentLine = i6773[10]
  i6772.m_SuperscriptOffset = i6773[11]
  i6772.m_SuperscriptSize = i6773[12]
  i6772.m_SubscriptOffset = i6773[13]
  i6772.m_SubscriptSize = i6773[14]
  i6772.m_UnderlineOffset = i6773[15]
  i6772.m_UnderlineThickness = i6773[16]
  i6772.m_StrikethroughOffset = i6773[17]
  i6772.m_StrikethroughThickness = i6773[18]
  i6772.m_TabWidth = i6773[19]
  return i6772
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i6776 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i6777 = data
  i6776.m_Index = i6777[0]
  i6776.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6777[1], i6776.m_Metrics)
  i6776.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6777[2], i6776.m_GlyphRect)
  i6776.m_Scale = i6777[3]
  i6776.m_AtlasIndex = i6777[4]
  return i6776
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6778 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6779 = data
  i6778.m_Width = i6779[0]
  i6778.m_Height = i6779[1]
  i6778.m_HorizontalBearingX = i6779[2]
  i6778.m_HorizontalBearingY = i6779[3]
  i6778.m_HorizontalAdvance = i6779[4]
  return i6778
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6780 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6781 = data
  i6780.m_X = i6781[0]
  i6780.m_Y = i6781[1]
  i6780.m_Width = i6781[2]
  i6780.m_Height = i6781[3]
  return i6780
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i6784 = root || request.c( 'TMPro.TMP_Character' )
  var i6785 = data
  i6784.m_ElementType = i6785[0]
  i6784.m_Unicode = i6785[1]
  i6784.m_GlyphIndex = i6785[2]
  i6784.m_Scale = i6785[3]
  return i6784
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i6790 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i6791 = data
  i6790.Name = i6791[0]
  i6790.PointSize = i6791[1]
  i6790.Scale = i6791[2]
  i6790.CharacterCount = i6791[3]
  i6790.LineHeight = i6791[4]
  i6790.Baseline = i6791[5]
  i6790.Ascender = i6791[6]
  i6790.CapHeight = i6791[7]
  i6790.Descender = i6791[8]
  i6790.CenterLine = i6791[9]
  i6790.SuperscriptOffset = i6791[10]
  i6790.SubscriptOffset = i6791[11]
  i6790.SubSize = i6791[12]
  i6790.Underline = i6791[13]
  i6790.UnderlineThickness = i6791[14]
  i6790.strikethrough = i6791[15]
  i6790.strikethroughThickness = i6791[16]
  i6790.TabWidth = i6791[17]
  i6790.Padding = i6791[18]
  i6790.AtlasWidth = i6791[19]
  i6790.AtlasHeight = i6791[20]
  return i6790
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i6794 = root || request.c( 'TMPro.TMP_Glyph' )
  var i6795 = data
  i6794.id = i6795[0]
  i6794.x = i6795[1]
  i6794.y = i6795[2]
  i6794.width = i6795[3]
  i6794.height = i6795[4]
  i6794.xOffset = i6795[5]
  i6794.yOffset = i6795[6]
  i6794.xAdvance = i6795[7]
  i6794.scale = i6795[8]
  return i6794
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i6796 = root || request.c( 'TMPro.KerningTable' )
  var i6797 = data
  var i6799 = i6797[0]
  var i6798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i6799.length; i += 1) {
    i6798.add(request.d('TMPro.KerningPair', i6799[i + 0]));
  }
  i6796.kerningPairs = i6798
  return i6796
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i6802 = root || request.c( 'TMPro.KerningPair' )
  var i6803 = data
  i6802.xOffset = i6803[0]
  i6802.m_FirstGlyph = i6803[1]
  i6802.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6803[2], i6802.m_FirstGlyphAdjustments)
  i6802.m_SecondGlyph = i6803[3]
  i6802.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6803[4], i6802.m_SecondGlyphAdjustments)
  i6802.m_IgnoreSpacingAdjustments = !!i6803[5]
  return i6802
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i6804 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i6805 = data
  var i6807 = i6805[0]
  var i6806 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i6807.length; i += 1) {
    i6806.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i6807[i + 0]));
  }
  i6804.m_GlyphPairAdjustmentRecords = i6806
  return i6804
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i6810 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i6811 = data
  i6810.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6811[0], i6810.m_FirstAdjustmentRecord)
  i6810.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6811[1], i6810.m_SecondAdjustmentRecord)
  i6810.m_FeatureLookupFlags = i6811[2]
  return i6810
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i6814 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i6815 = data
  i6814.sourceFontFileName = i6815[0]
  i6814.sourceFontFileGUID = i6815[1]
  i6814.pointSizeSamplingMode = i6815[2]
  i6814.pointSize = i6815[3]
  i6814.padding = i6815[4]
  i6814.packingMode = i6815[5]
  i6814.atlasWidth = i6815[6]
  i6814.atlasHeight = i6815[7]
  i6814.characterSetSelectionMode = i6815[8]
  i6814.characterSequence = i6815[9]
  i6814.referencedFontAssetGUID = i6815[10]
  i6814.referencedTextAssetGUID = i6815[11]
  i6814.fontStyle = i6815[12]
  i6814.fontStyleModifier = i6815[13]
  i6814.renderMode = i6815[14]
  i6814.includeFontFeatures = !!i6815[15]
  return i6814
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i6818 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i6819 = data
  request.r(i6819[0], i6819[1], 0, i6818, 'regularTypeface')
  request.r(i6819[2], i6819[3], 0, i6818, 'italicTypeface')
  return i6818
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i6820 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i6821 = data
  i6820.useSafeMode = !!i6821[0]
  i6820.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i6821[1], i6820.safeModeOptions)
  i6820.timeScale = i6821[2]
  i6820.useSmoothDeltaTime = !!i6821[3]
  i6820.maxSmoothUnscaledTime = i6821[4]
  i6820.rewindCallbackMode = i6821[5]
  i6820.showUnityEditorReport = !!i6821[6]
  i6820.logBehaviour = i6821[7]
  i6820.drawGizmos = !!i6821[8]
  i6820.defaultRecyclable = !!i6821[9]
  i6820.defaultAutoPlay = i6821[10]
  i6820.defaultUpdateType = i6821[11]
  i6820.defaultTimeScaleIndependent = !!i6821[12]
  i6820.defaultEaseType = i6821[13]
  i6820.defaultEaseOvershootOrAmplitude = i6821[14]
  i6820.defaultEasePeriod = i6821[15]
  i6820.defaultAutoKill = !!i6821[16]
  i6820.defaultLoopType = i6821[17]
  i6820.debugMode = !!i6821[18]
  i6820.debugStoreTargetId = !!i6821[19]
  i6820.showPreviewPanel = !!i6821[20]
  i6820.storeSettingsLocation = i6821[21]
  i6820.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i6821[22], i6820.modules)
  i6820.createASMDEF = !!i6821[23]
  i6820.showPlayingTweens = !!i6821[24]
  i6820.showPausedTweens = !!i6821[25]
  return i6820
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i6822 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i6823 = data
  i6822.logBehaviour = i6823[0]
  i6822.nestedTweenFailureBehaviour = i6823[1]
  return i6822
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i6824 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i6825 = data
  i6824.showPanel = !!i6825[0]
  i6824.audioEnabled = !!i6825[1]
  i6824.physicsEnabled = !!i6825[2]
  i6824.physics2DEnabled = !!i6825[3]
  i6824.spriteEnabled = !!i6825[4]
  i6824.uiEnabled = !!i6825[5]
  i6824.textMeshProEnabled = !!i6825[6]
  i6824.tk2DEnabled = !!i6825[7]
  i6824.deAudioEnabled = !!i6825[8]
  i6824.deUnityExtendedEnabled = !!i6825[9]
  i6824.epoOutlineEnabled = !!i6825[10]
  return i6824
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i6826 = root || request.c( 'TMPro.TMP_Settings' )
  var i6827 = data
  i6826.m_enableWordWrapping = !!i6827[0]
  i6826.m_enableKerning = !!i6827[1]
  i6826.m_enableExtraPadding = !!i6827[2]
  i6826.m_enableTintAllSprites = !!i6827[3]
  i6826.m_enableParseEscapeCharacters = !!i6827[4]
  i6826.m_EnableRaycastTarget = !!i6827[5]
  i6826.m_GetFontFeaturesAtRuntime = !!i6827[6]
  i6826.m_missingGlyphCharacter = i6827[7]
  i6826.m_warningsDisabled = !!i6827[8]
  request.r(i6827[9], i6827[10], 0, i6826, 'm_defaultFontAsset')
  i6826.m_defaultFontAssetPath = i6827[11]
  i6826.m_defaultFontSize = i6827[12]
  i6826.m_defaultAutoSizeMinRatio = i6827[13]
  i6826.m_defaultAutoSizeMaxRatio = i6827[14]
  i6826.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i6827[15], i6827[16] )
  i6826.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i6827[17], i6827[18] )
  i6826.m_autoSizeTextContainer = !!i6827[19]
  i6826.m_IsTextObjectScaleStatic = !!i6827[20]
  var i6829 = i6827[21]
  var i6828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6829.length; i += 2) {
  request.r(i6829[i + 0], i6829[i + 1], 1, i6828, '')
  }
  i6826.m_fallbackFontAssets = i6828
  i6826.m_matchMaterialPreset = !!i6827[22]
  request.r(i6827[23], i6827[24], 0, i6826, 'm_defaultSpriteAsset')
  i6826.m_defaultSpriteAssetPath = i6827[25]
  i6826.m_enableEmojiSupport = !!i6827[26]
  i6826.m_MissingCharacterSpriteUnicode = i6827[27]
  i6826.m_defaultColorGradientPresetsPath = i6827[28]
  request.r(i6827[29], i6827[30], 0, i6826, 'm_defaultStyleSheet')
  i6826.m_StyleSheetsResourcePath = i6827[31]
  request.r(i6827[32], i6827[33], 0, i6826, 'm_leadingCharacters')
  request.r(i6827[34], i6827[35], 0, i6826, 'm_followingCharacters')
  i6826.m_UseModernHangulLineBreakingRules = !!i6827[36]
  return i6826
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i6830 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i6831 = data
  var i6833 = i6831[0]
  var i6832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i6833.length; i += 1) {
    i6832.add(request.d('TMPro.TMP_Style', i6833[i + 0]));
  }
  i6830.m_StyleList = i6832
  return i6830
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i6836 = root || request.c( 'TMPro.TMP_Style' )
  var i6837 = data
  i6836.m_Name = i6837[0]
  i6836.m_HashCode = i6837[1]
  i6836.m_OpeningDefinition = i6837[2]
  i6836.m_ClosingDefinition = i6837[3]
  i6836.m_OpeningTagArray = i6837[4]
  i6836.m_ClosingTagArray = i6837[5]
  i6836.m_OpeningTagUnicodeArray = i6837[6]
  i6836.m_ClosingTagUnicodeArray = i6837[7]
  return i6836
}

Deserializers["Cinemachine.NoiseSettings"] = function (request, data, root) {
  var i6838 = root || request.c( 'Cinemachine.NoiseSettings' )
  var i6839 = data
  var i6841 = i6839[0]
  var i6840 = []
  for(var i = 0; i < i6841.length; i += 1) {
    i6840.push( request.d('Cinemachine.NoiseSettings+TransformNoiseParams', i6841[i + 0]) );
  }
  i6838.PositionNoise = i6840
  var i6843 = i6839[1]
  var i6842 = []
  for(var i = 0; i < i6843.length; i += 1) {
    i6842.push( request.d('Cinemachine.NoiseSettings+TransformNoiseParams', i6843[i + 0]) );
  }
  i6838.OrientationNoise = i6842
  return i6838
}

Deserializers["Cinemachine.NoiseSettings+TransformNoiseParams"] = function (request, data, root) {
  var i6846 = root || request.c( 'Cinemachine.NoiseSettings+TransformNoiseParams' )
  var i6847 = data
  i6846.X = request.d('Cinemachine.NoiseSettings+NoiseParams', i6847[0], i6846.X)
  i6846.Y = request.d('Cinemachine.NoiseSettings+NoiseParams', i6847[1], i6846.Y)
  i6846.Z = request.d('Cinemachine.NoiseSettings+NoiseParams', i6847[2], i6846.Z)
  return i6846
}

Deserializers["Cinemachine.NoiseSettings+NoiseParams"] = function (request, data, root) {
  var i6848 = root || request.c( 'Cinemachine.NoiseSettings+NoiseParams' )
  var i6849 = data
  i6848.Frequency = i6849[0]
  i6848.Amplitude = i6849[1]
  i6848.Constant = !!i6849[2]
  return i6848
}

Deserializers["ScenarioFour.CameraFovList"] = function (request, data, root) {
  var i6850 = root || request.c( 'ScenarioFour.CameraFovList' )
  var i6851 = data
  var i6853 = i6851[0]
  var i6852 = []
  for(var i = 0; i < i6853.length; i += 1) {
    i6852.push( request.d('ScenarioFour.CameraFov', i6853[i + 0]) );
  }
  i6850._fovList = i6852
  return i6850
}

Deserializers["ScenarioFour.CameraFov"] = function (request, data, root) {
  var i6856 = root || request.c( 'ScenarioFour.CameraFov' )
  var i6857 = data
  i6856._cameraType = i6857[0]
  i6856._landscape = i6857[1]
  i6856._portrait = i6857[2]
  return i6856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6859 = data
  var i6861 = i6859[0]
  var i6860 = []
  for(var i = 0; i < i6861.length; i += 1) {
    i6860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6861[i + 0]) );
  }
  i6858.files = i6860
  i6858.componentToPrefabIds = i6859[1]
  return i6858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6865 = data
  i6864.path = i6865[0]
  request.r(i6865[1], i6865[2], 0, i6864, 'unityObject')
  return i6864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6867 = data
  var i6869 = i6867[0]
  var i6868 = []
  for(var i = 0; i < i6869.length; i += 1) {
    i6868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6869[i + 0]) );
  }
  i6866.scriptsExecutionOrder = i6868
  var i6871 = i6867[1]
  var i6870 = []
  for(var i = 0; i < i6871.length; i += 1) {
    i6870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6871[i + 0]) );
  }
  i6866.sortingLayers = i6870
  var i6873 = i6867[2]
  var i6872 = []
  for(var i = 0; i < i6873.length; i += 1) {
    i6872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6873[i + 0]) );
  }
  i6866.cullingLayers = i6872
  i6866.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6867[3], i6866.timeSettings)
  i6866.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6867[4], i6866.physicsSettings)
  i6866.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6867[5], i6866.physics2DSettings)
  i6866.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6867[6], i6866.qualitySettings)
  i6866.enableRealtimeShadows = !!i6867[7]
  i6866.autoInstantiatePrefabs = !!i6867[8]
  i6866.enableAutoInstancing = !!i6867[9]
  i6866.lightmapEncodingQuality = i6867[10]
  i6866.desiredColorSpace = i6867[11]
  return i6866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6877 = data
  i6876.name = i6877[0]
  i6876.value = i6877[1]
  return i6876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6881 = data
  i6880.id = i6881[0]
  i6880.name = i6881[1]
  i6880.value = i6881[2]
  return i6880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6885 = data
  i6884.id = i6885[0]
  i6884.name = i6885[1]
  return i6884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6887 = data
  i6886.fixedDeltaTime = i6887[0]
  i6886.maximumDeltaTime = i6887[1]
  i6886.timeScale = i6887[2]
  i6886.maximumParticleTimestep = i6887[3]
  return i6886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6889 = data
  i6888.gravity = new pc.Vec3( i6889[0], i6889[1], i6889[2] )
  i6888.defaultSolverIterations = i6889[3]
  i6888.bounceThreshold = i6889[4]
  i6888.autoSyncTransforms = !!i6889[5]
  i6888.autoSimulation = !!i6889[6]
  var i6891 = i6889[7]
  var i6890 = []
  for(var i = 0; i < i6891.length; i += 1) {
    i6890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6891[i + 0]) );
  }
  i6888.collisionMatrix = i6890
  return i6888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6895 = data
  i6894.enabled = !!i6895[0]
  i6894.layerId = i6895[1]
  i6894.otherLayerId = i6895[2]
  return i6894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6897 = data
  request.r(i6897[0], i6897[1], 0, i6896, 'material')
  i6896.gravity = new pc.Vec2( i6897[2], i6897[3] )
  i6896.positionIterations = i6897[4]
  i6896.velocityIterations = i6897[5]
  i6896.velocityThreshold = i6897[6]
  i6896.maxLinearCorrection = i6897[7]
  i6896.maxAngularCorrection = i6897[8]
  i6896.maxTranslationSpeed = i6897[9]
  i6896.maxRotationSpeed = i6897[10]
  i6896.timeToSleep = i6897[11]
  i6896.linearSleepTolerance = i6897[12]
  i6896.angularSleepTolerance = i6897[13]
  i6896.defaultContactOffset = i6897[14]
  i6896.autoSimulation = !!i6897[15]
  i6896.queriesHitTriggers = !!i6897[16]
  i6896.queriesStartInColliders = !!i6897[17]
  i6896.callbacksOnDisable = !!i6897[18]
  i6896.reuseCollisionCallbacks = !!i6897[19]
  i6896.autoSyncTransforms = !!i6897[20]
  var i6899 = i6897[21]
  var i6898 = []
  for(var i = 0; i < i6899.length; i += 1) {
    i6898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6899[i + 0]) );
  }
  i6896.collisionMatrix = i6898
  return i6896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6903 = data
  i6902.enabled = !!i6903[0]
  i6902.layerId = i6903[1]
  i6902.otherLayerId = i6903[2]
  return i6902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6905 = data
  var i6907 = i6905[0]
  var i6906 = []
  for(var i = 0; i < i6907.length; i += 1) {
    i6906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6907[i + 0]) );
  }
  i6904.qualityLevels = i6906
  var i6909 = i6905[1]
  var i6908 = []
  for(var i = 0; i < i6909.length; i += 1) {
    i6908.push( i6909[i + 0] );
  }
  i6904.names = i6908
  i6904.shadows = i6905[2]
  i6904.anisotropicFiltering = i6905[3]
  i6904.antiAliasing = i6905[4]
  i6904.lodBias = i6905[5]
  i6904.shadowCascades = i6905[6]
  i6904.shadowDistance = i6905[7]
  i6904.shadowmaskMode = i6905[8]
  i6904.shadowProjection = i6905[9]
  i6904.shadowResolution = i6905[10]
  i6904.softParticles = !!i6905[11]
  i6904.softVegetation = !!i6905[12]
  i6904.activeColorSpace = i6905[13]
  i6904.desiredColorSpace = i6905[14]
  i6904.masterTextureLimit = i6905[15]
  i6904.maxQueuedFrames = i6905[16]
  i6904.particleRaycastBudget = i6905[17]
  i6904.pixelLightCount = i6905[18]
  i6904.realtimeReflectionProbes = !!i6905[19]
  i6904.shadowCascade2Split = i6905[20]
  i6904.shadowCascade4Split = new pc.Vec3( i6905[21], i6905[22], i6905[23] )
  i6904.streamingMipmapsActive = !!i6905[24]
  i6904.vSyncCount = i6905[25]
  i6904.asyncUploadBufferSize = i6905[26]
  i6904.asyncUploadTimeSlice = i6905[27]
  i6904.billboardsFaceCameraPosition = !!i6905[28]
  i6904.shadowNearPlaneOffset = i6905[29]
  i6904.streamingMipmapsMemoryBudget = i6905[30]
  i6904.maximumLODLevel = i6905[31]
  i6904.streamingMipmapsAddAllCameras = !!i6905[32]
  i6904.streamingMipmapsMaxLevelReduction = i6905[33]
  i6904.streamingMipmapsRenderersPerFrame = i6905[34]
  i6904.resolutionScalingFixedDPIFactor = i6905[35]
  i6904.streamingMipmapsMaxFileIORequests = i6905[36]
  i6904.currentQualityLevel = i6905[37]
  return i6904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6915 = data
  i6914.weight = i6915[0]
  i6914.vertices = i6915[1]
  i6914.normals = i6915[2]
  i6914.tangents = i6915[3]
  return i6914
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6916 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6917 = data
  request.r(i6917[0], i6917[1], 0, i6916, 'm_ObjectArgument')
  i6916.m_ObjectArgumentAssemblyTypeName = i6917[2]
  i6916.m_IntArgument = i6917[3]
  i6916.m_FloatArgument = i6917[4]
  i6916.m_StringArgument = i6917[5]
  i6916.m_BoolArgument = !!i6917[6]
  return i6916
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6918 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6919 = data
  i6918.xPlacement = i6919[0]
  i6918.yPlacement = i6919[1]
  i6918.xAdvance = i6919[2]
  i6918.yAdvance = i6919[3]
  return i6918
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i6920 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i6921 = data
  i6920.m_GlyphIndex = i6921[0]
  i6920.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i6921[1], i6920.m_GlyphValueRecord)
  return i6920
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i6922 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i6923 = data
  i6922.m_XPlacement = i6923[0]
  i6922.m_YPlacement = i6923[1]
  i6922.m_XAdvance = i6923[2]
  i6922.m_YAdvance = i6923[3]
  return i6922
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[30],"70":[10],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[80],"88":[80],"89":[80],"90":[80],"91":[80],"92":[80],"93":[10],"94":[8],"95":[96],"97":[96],"34":[38],"22":[19],"26":[19],"98":[19],"99":[19],"100":[38],"101":[45,38],"102":[8],"103":[45,38],"104":[38],"105":[8,38],"47":[38,45],"106":[38],"107":[38],"108":[38],"41":[34],"43":[45,38],"109":[38],"40":[34],"110":[38],"111":[38],"112":[38],"113":[38],"114":[38],"115":[38],"116":[38],"49":[38],"117":[38],"118":[45,38],"119":[38],"120":[38],"121":[38],"122":[38],"123":[45,38],"124":[38],"125":[51],"126":[51],"52":[51],"127":[51],"128":[10],"129":[10],"130":[10],"131":[132],"133":[10],"134":[42]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Sprite","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","Cinemachine.CinemachineBrain","Cinemachine.CinemachineBlenderSettings","UnityEngine.AudioSource","UnityEngine.AudioClip","SoundHandler","UnityEngine.Light","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","JumpHandler","AnimationHandler","EffectHandler","UIHandler","EnemyPool","Enemy","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","UnityEngine.SkinnedMeshRenderer","Cinemachine.CinemachineTransposer","StartCamera","Cinemachine.CinemachineSmoothPath","UnityEngine.Canvas","ResolutionHandler","CameraHandler","Cinemachine.CinemachineTrackedDolly","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.GameObject","UnityEngine.CanvasRenderer","UnityEngine.CanvasGroup","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","Stalker","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ChooseHandler","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","Cinemachine.NoiseSettings","ScenarioFour.CameraFovList","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ScenarioFour.AnimatedModel","ScenarioFour.EnemyAnimatedModel","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","UnityEngine.Rendering.PostProcessing.PostProcessLayer","UnityEngine.Purchasing.IAPButton"]

Deserializers.unityVersion = "2020.3.22f1";

Deserializers.productName = "CRSEDPlayableAd(Repack)";

Deserializers.lunaInitializationTime = "09/23/2022 12:25:20";

Deserializers.lunaDaysRunning = "18.2";

Deserializers.lunaVersion = "4.0.0";

Deserializers.lunaSHA = "5046d9954fe68e1599eaaf3688d6669074172d3a";

Deserializers.creativeName = "Viper_v1";

Deserializers.lunaAppID = "13417";

Deserializers.projectId = "33295ed8-87c8-46f3-914c-5d52dbfa511a";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.6.17\ncom.unity.postprocessing: 3.2.2\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.4.8\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = "";

Deserializers.iosLink = "";

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isAutoInstantiatePrefabsEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1148";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4226";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.CRSEDPlayableAdRepack";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "2ca506d7-5f0e-4fc5-a326-f2482a01dea4";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

